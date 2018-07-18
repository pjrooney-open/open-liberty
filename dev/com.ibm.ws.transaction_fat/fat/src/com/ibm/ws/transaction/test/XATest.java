/*******************************************************************************
 * Copyright (c) 2017, 2018 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/
package com.ibm.ws.transaction.test;

import static org.junit.Assert.fail;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.ibm.tx.jta.ut.util.XAResourceImpl;
import com.ibm.websphere.simplicity.ShrinkHelper;
import com.ibm.ws.transaction.web.XAServlet;

import componenttest.annotation.ExpectedFFDC;
import componenttest.annotation.Server;
import componenttest.annotation.SkipForRepeat;
import componenttest.annotation.TestServlet;
import componenttest.custom.junit.runner.FATRunner;
import componenttest.topology.impl.LibertyServer;
import componenttest.topology.utils.FATServletClient;

/**
 * Example Shrinkwrap FAT project:
 * <li> Application packaging is done in the @BeforeClass, instead of ant scripting.
 * <li> Injects servers via @Server annotation. Annotation value corresponds to the
 * server directory name in 'publish/servers/%annotation_value%' where ports get
 * assigned to the LibertyServer instance when the 'testports.properties' does not
 * get used.
 * <li> Specifies an @RunWith(FATRunner.class) annotation. Traditionally this has been
 * added to bytecode automatically by ant.
 * <li> Uses the @TestServlet annotation to define test servlets. Notice that not all @Test
 * methods are defined in this class. All of the @Test methods are defined on the test
 * servlet referenced by the annotation, and will be run whenever this test class runs.
 */
@RunWith(FATRunner.class)
public class XATest extends FATServletClient {

    public static final String APP_NAME = "transaction";
    public static final String SERVLET_NAME = "transaction/XAServlet";

    @Server("com.ibm.ws.transaction")
    @TestServlet(servlet = XAServlet.class, contextRoot = APP_NAME)
    public static LibertyServer server;

    @BeforeClass
    public static void setUp() throws Exception {
        // Create a WebArchive that will have the file name 'app1.war' once it's written to a file
        // Include the 'app1.web' package and all of it's java classes and sub-packages
        // Automatically includes resources under 'test-applications/APP_NAME/resources/' folder
        // Exports the resulting application to the ${server.config.dir}/apps/ directory
        ShrinkHelper.defaultApp(server, APP_NAME, "com.ibm.ws.transaction.*");
        // Install bundle for txfat feature
        server.copyFileToLibertyInstallRoot("lib/", "bundles/com.ibm.ws.transactions.fat.utils.jar");
        server.startServer();
    }

    @AfterClass
    public static void tearDown() throws Exception {
        server.stopServer("WTRN0075W", "WTRN0076W"); // Stop the server and indicate the '"WTRN0075W", "WTRN0076W" error messages were expected
    }

    @Test
    @SkipForRepeat(componenttest.annotation.SkipForRepeat.EE8_FEATURES)
    public void testSetTransactionTimeoutReturnsTrue() throws Exception {
        server.setMarkToEndOfLog();
        runTest(server, SERVLET_NAME, testName.getMethodName());
        if (null == server.waitForStringInLogUsingMark(XAResourceImpl.class.getCanonicalName() + ".setTransactionTimeout\\([0-9]*\\): TRUE")) {
            fail("setTransactionTimeout() does not seem to have been called");
        }
    }

    @Test
    @SkipForRepeat(componenttest.annotation.SkipForRepeat.EE8_FEATURES)
    public void testSetTransactionTimeoutReturnsFalse() throws Exception {
        server.setMarkToEndOfLog();
        runTest(server, SERVLET_NAME, testName.getMethodName());
        if (null == server.waitForStringInLogUsingMark(XAResourceImpl.class.getCanonicalName() + ".setTransactionTimeout\\([0-9]*\\): FALSE")) {
            fail("setTransactionTimeout() does not seem to have been called");
        }
    }

    @Test
    @SkipForRepeat(componenttest.annotation.SkipForRepeat.EE8_FEATURES)
    @ExpectedFFDC(value = { "javax.transaction.xa.XAException" })
    public void testSetTransactionTimeoutThrowsException() throws Exception {
        server.setMarkToEndOfLog();
        runTest(server, SERVLET_NAME, testName.getMethodName());
        if (null == server.waitForStringInLogUsingMark(XAResourceImpl.class.getCanonicalName() + ".setTransactionTimeout\\([0-9]*\\): javax.transaction.xa.XAException")) {
            fail("setTransactionTimeout() does not seem to have been called");
        }
    }

}
