-include= ~${workspace}/cnf/resources/bnd/feature.props
symbolicName = io.openliberty.samlWeb2.0.javaee
visibility = private
IBM-Provision-Capability:\
  osgi.identity; filter:="(&(type=osgi.subsystem.feature)(osgi.identity=com.ibm.websphere.appserver.samlWeb-2.0))",\
  osgi.identity; filter:="(&(type=osgi.subsystem.feature)(|(osgi.identity=com.ibm.websphere.appserver.servlet-3.0)(osgi.identity=com.ibm.websphere.appserver.servlet-3.1)(osgi.identity=com.ibm.websphere.appserver.servlet-4.0)))"
IBM-Install-Policy: when-satisfied
-features=\
  com.ibm.websphere.appserver.servlet-3.0; ibm.tolerates:="3.1,4.0", \
  com.ibm.websphere.appserver.appSecurity-2.0; ibm.tolerates:=3.0, \
  com.ibm.websphere.appserver.wss4j-1.0; ibm.tolerates:=2.3, \
  com.ibm.websphere.appserver.samlWebOpenSaml-2.6; ibm.tolerates:=3.4
kind=ga
edition=core
