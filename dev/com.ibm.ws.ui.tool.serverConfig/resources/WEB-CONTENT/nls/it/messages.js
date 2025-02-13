/*******************************************************************************
 * Copyright (c) 2016, 2019 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *     IBM Corporation - initial API and implementation
 *******************************************************************************/

var editorMessages = {
"VALUE": "Valore",
"SELECT": "Seleziona",
"ADD": "Aggiungi",
"OK": "OK",
"CANCEL": "Annulla",
"ADD_CHILD": "Aggiungi child",
"REMOVE": "Rimuovi",
"TEST" : "Test",
"TEST_CONNECTION": "Verifica connessione",
"DESCRIPTION": "Descrizione",
"PREVIOUS": "Indietro",
"NEXT": "Avanti",
"REMOVE_ELEMENT_CONFIRMATION": "Rimuovere l'elemento?",
"YES": "Sì",
"NO": "No",
"LOADING": "Caricamento...",
"SERVER_CONFIGURATION_EDITOR": "Strumento di configurazione server",
"CONFIGURATION_FILES": "File di configurazione",
"TOGGLE_NAVIGATION": "Attiva/disattiva navigazione",
"CLOSE": "Chiudi",
"ERROR_ACCESSING_SERVER_CONFIGURATION_FILE": "Non è stato possibile accedere al file di configurazione server {0}.",
"ERROR_ACCESSING_SERVER_SCHEMA_FILE": "Non è stato possibile accedere al file di schema {0}.",
"NO_MATCHES_FOUND": "Nessuna corrispondenza trovata.",
"DEFAULT_VALUE_PLACEHOLDER": "{0} (predefinito)",
"DEFAULT_VALUE_PLACEHOLDER_WITH_VARIABLE": "{0} (predefinito) o ${{1}} (se definito)",
"VARIABLE_VALUE_PLACEHOLDER": "{0} (se definito)",
"DEFAULT_SUFFIX": "(predefinito)",
"SAVE": "Salva",
"DISCARD": "Elimina",
"ENHANCED_LABELS": "Etichette avanzate",
"FIELD_DESCRIPTIONS": "Descrizioni campi",
"MALFORMED_XML": "Il contenuto XML sembra essere in formato non corretto, passare a {0} per la modifica.",
"DESIGN": "Progettazione",
"SOURCE": "Origine",
"SOURCE_PANE": "riquadro origine",
"LINE_NUMBERS": "Numeri righe",
"DOCUMENTATION_DEFAULT": "Impostazione predefinita: {0}",
"REQUIRED_SUFFIX": "(obbligatorio)",
"USER_NAME": "Nome utente",
"USER_NAME_OPTIONAL": "Nome utente (facoltativo)",
"PASSWORD": "Password",
"PASSWORD_OPTIONAL": "Password (facoltativo)",
"SIGN_IN": "Accedi",
"ONE_MOMENT_PLEASE": "Attendere...",
"LOGIN_FAIL": "Login non riuscito, riprovare",
"FAILED" : "Non riuscito.",
"FAILED_HTTP_CODE" : "La richiesta non è riuscita con codice di stato HTTP {0}.",
"SUCCESS" : "Riuscito.",
"RESPONSE": "Risposta",
"PARAMETERS": "Parametri",
"MISSING_USER_NAME": "Specificare il nome utente", 
"SIGN_OUT": "Esci",
"SIGN_OUT_ERROR": "Si è verificato un errore durante il tentativo di uscita",
"SIGN_OUT_PROMPT": "Uscire?",
"CHANGES_SAVED": "Modifiche salvate",
"FILE_ACCESS_ERROR_MESSAGE": "Si è verificato un errore durante il tentativo di accedere ai file di configurazione del server",
"ERROR_SAVING_FILE_MESSAGE": "Le modifiche non sono state salvate.  Il server potrebbe essere inattivo, il file potrebbe essere di sola lettura o il ruolo utente potrebbe non disporre dell'autorizzazione per apportare modifiche alla configurazione.",
"ERROR": "Errore",
"UNSAVED_CHANGES_MESSAGE": "Sono presenti modifiche non salvate.",
"READ_ONLY": "Sola lettura",
"RESTRICTED_OR_UNAVAILABLE": "Limitato o non disponibile",
"EXPLORE_INCLUDES": "Esplora inclusioni",
"OPEN": "Apri",
"READ_ONLY_WARNING_MESSAGE": "L'accesso al file remoto non è configurato su questo server. I file sono disponibili in modalità di sola lettura. Per abilitare l'accesso in scrittura, aggiungere il seguente elemento al file  server.xml:",
"SAVE_BEFORE_CLOSING_DIALOG_TITLE": "Chiudi",
"SAVE_BEFORE_CLOSING_DIALOG_MESSAGE": "Salvare le modifiche a {0} prima di chiudere?",
"DONT_SAVE": "Non salvare",
"RETURN_TO_EDITOR": "Ritorna all'editor",
"THE_VALUE_SHOULD_BE_A_BOOLEAN": "Il valore deve essere è true o false.",
"THE_VALUE_SHOULD_BE_A_NUMBER": "Il valore deve essere un numero.",
"THE_VALUE_SHOULD_BE_AMONG_THE_POSSIBLE_OPTIONS": "Il valore deve essere una delle opzioni possibili: {0}.",
"UNRECOGNIZED_ELEMENT": "L'elemento \"{0}\" non è riconosciuto dal server. Passare a {1} per modificarne il contenuto.",
"SERVER_NOT_FOUND": "Il server \"{0}\" con l'host \"{1}\" e directory utente \"{2}\" non è stato trovato.",
"FILE_NOT_FOUND_REPLACE": "Il file \"{0}\" non è stato trovato.",
"ERROR_ACCESSING_SERVER_LIST": "Non è stato possibile accedere all'elenco di server nel Collective.",
"ERROR_NOT_IN_COLLECTIVE_ENVIRONMENT": "Il riferimento al server remoto nell'URL non è valido al di fuori dell'ambiente del Collective. Fare clic su {0} per accedere ai file di configurazione sul server locale.",
"ERROR_ACCESSING_INCLUDE_FILES": "Non è stato possibile accedere ai file di inclusione.",
"PATH_NOT_AVAILABLE": "Percorso non disponibile",
"HERE": "qui",
"CHANGE_SERVER": "Modifica server",
"ERROR_RETRIEVING_SERVER_INFORMATION": "Impossibile richiamare le informazioni sul server.",
"SELECT_SERVER": "Seleziona server",
"SERVER_DESCRIPTION": "Selezionare un elemento nell'albero a sinistra per visualizzarne la  configurazione.",
"SELECT_ELEMENT_TO_VIEW_DESCRIPTION": "Selezionare un elemento per visualizzarne la descrizione.",
"SAVING": "Salvataggio...",
"SERVER_NAME": "Nome server",
"CLUSTER": "Cluster",
"HOST": "Host",
"USER_DIRECTORY_PATH": "Percorso directory utente",
"SERVERS": "{0} server",
"ONE_SERVER": "1 server",
"SHOWING_FIRST_N_SERVERS": "(Visualizzazione dei primi 500 server)",
"COULD_NOT_RETRIEVE_SERVER_IDENTIFICATION": "Impossibile richiamare le informazioni di identificazione del server.",
"CONTENT_ASSIST_AVAILABLE": "Premere Ctrl+spazio per l'assistenza contenuto.",
"OPEN_FILE": "Apri file",
"CREATE_FILE": "Crea file",
"FILE_NOT_FOUND": "File non trovato",
"CANNOT_ACCESS_FILE": "Impossibile accedere al file",
"CREATING_FILE": "Creazione file...",
"SUCCESSFULLY_CREATED_FILE": "File creato correttamente",
"COULD_NOT_CREATE_FILE": "Impossibile creare il file",
"FILE_CHANGED_DURING_EDITING_DIALOG_TITLE": "Conflitto di salvataggio",
"OVERWRITE": "Sovrascrivi",
"FILE_CHANGED_DURING_EDITING_DIALOG_MESSAGE": "Il file {0} è stato modificato da un altro utente o processo dopo la sua apertura.",
"OVERWRITING": "Sovrascrittura...",
"SEARCH": "Ricerca",
"SETTINGS": "Impostazioni",
"LOCATION": "Ubicazione",
"EXPAND": "Espandi",
"COLLAPSE": "Comprimi",
"CLEAR": "Cancella",
"EXPAND_COLLAPSE": "Espandi/comprimi",
"ELEMENT_INFORMATION_FORM": "Modulo informazioni elemento",
"SOURCE_EDITOR": "Editor origine",
"SOURCE_EDITOR_CONTENT": "Contenuto editor origine",
"SOURCE_EDITOR_MENU" : "Contenuto del menu",
"ELEMENT_DESCRIPTION": "Descrizione elemento",
"ELEMENT_SEARCH": "Ricerca elemento",
"ADD_CHILD_ELEMENT_DIALOG": "Finestra di dialogo Aggiungi elemento child",
"REMOVE_ELEMENT_DIALOG": "Finestra di dialogo Rimuovi elemento",
"VALIDATE_DATASOURCE_DIALOG": "Finestra di dialogo Convalida connessione origine dati",
"VALIDATE_DATASOURCE": "Verifica della connessione dell'origine dati",
"ENUMERATION_SELECTION_DIALOG": "Finestra di dialogo Selezione enumerazione",
"SAVE_BEFORE_CLOSING_DIALOG": "Finestra di dialogo Salva prima di chiudere",
"ERROR_SAVING_FILE_DIALOG": "Finestra di dialogo Errore durante il salvataggio del file",
"FILE_CHANGED_DURING_EDITING_DIALOG": "Finestra di dialogo File cambiato durante la modifica",
"SERVER_TABLE_CELL_FOR_SCREEN_READER": "Cluster {0}, Host {1}, Percorso directory utente {2}",
"WARNING": "Avvertenza",
"EMPTY_STRING_ATTRIBUTE_VALUE": "(stringa vuota) fare clic sul pulsante Cancella per rimuovere l'attributo",
"EMPTY_STRING_ELEMENT_VALUE": "(stringa vuota)",
"NO_VALUE": "(nessun valore)",
"DEFAULTS": "Valori predefiniti",
"PRIMARY": "Primario",
"AUTH_ALIAS_OPTIONAL": "Alias di autenticazione (facoltativo)",
"AUTH_ALIAS": "Alias di autenticazione",
"CONTAINER_AUTHENTICATION": "Autenticazione contenitore",
"NO_RESOURCE_REFERENCE": "Nessun riferimento risorsa",
"APPLICATION_AUTHENTICATION": "Autenticazione applicazione",
"CUSTOM_LOGIN_MODULE": "Modulo di login personalizzato (facoltativo)",
"LOGIN_PROPERTIES": "Proprietà di login (facoltativo)",
"TEST_RESULTS": "Risultati del test dell'origine dati",
"OVERRIDES": "Sovrascritture",
"SELECT_FEATURE_DIALOG": "Finestra di dialogo Seleziona funzione",
"SELECT_FEATURE": "Seleziona funzione",
"FEATURE_DESCRIPTION": "Descrizione funzione",
"SELECT_FEATURE_TO_VIEW_DESCRIPTION": "Selezionare una funzione per visualizzarne la descrizione.",
"SUPPORT_MESSAGE" : "Configurazione server non disponibile per server Node.js nè per server in un contenitore Docker cui si accede tramite il Collective Controller.",
"NO_ROLE_MESSAGE": "L'utente non ha un ruolo che dispone dell'autorizzazione per completare questa richiesta. I file sono disponibili in modalità di sola lettura.",
	
// Messages for Collective Debugging
"REQUIRED_ACTIONS" : "AZIONI RICHIESTE PER I MEMBRI COLLECTIVE:",
"RUN_UPDATE_HOST" : "Eseguire 'collective updateHost' o 'collective registerHost' con '--hostWritePath' specificando un percorso per cui l'utente rpc ha autorizzazioni di scrittura.  Occorre anche fornire credenzili host valide.",
"REGISTERING_HOST_LINK" : "Registrazione di computer host con un Liberty Collective",
"CONIFGURED_SSH_RXA" : "Il server membro deve avere SSH configurat appropriatamente o hostAuthInfo nella configurazione.",
"CONFIGURING_COLLECTIVE_LINK" : "Configurazione di Liberty Collective",
"CONFIGURING_RXA_LINK" : "Configurazione RXA",
"TWO_LINKS" : "{0} e {1}", //Hyperlink 1 (CONFIGURING_COLLECTIVE_LINK) and hyperlink 2 (CONFIGURING_RXA_LINK)
"CONFIGRUED_READ_DIR" : "Assicurarsi che la configurazione del membro specifichi l'accesso remoteFileAccess readDir ai file di configurazione che devono essere accessibili tramite la configurazione del server.",
"DEFAULT_READ_DIR" : "Nota: per impostazione predefinita (e se remoteFileAccess non è specificato nella configurazione), sono disponibili le seguenti directory di installazione: ${wlp.install.dir}, ${wlp.user.dir} e ${server.output.dir}.  Nessuna writeDir disponibile per impostazione predefinita.",
"PUBLISHED_READ_DIR" : "Il server membro deve essere in esecuzione o essere stato precedentemente avviato e avere correttamente pubblicato le relative remoteFileAccess readDir.",
"JAVA_AVAILABLE" : "Verificare che JAVA sia impostato sul percorso. Esistono tre modi per impostare JAVA:",
"HOST_JAVA_HOME" : "Specifica del parametro --hostJAVAHome nel comando collective updateHost. ad es. ./collective updateHost --host=[hostName] --user=[user] --password=[password] --port=[httpsPort] --hostJAVAHome=[pathToJAVA]",
"LINK_JAVA" : "Creare un link a JAVA in /usr/bin. ad es. /usr/bin/java -> [pathToJAVA]",
"JAVA_ON_PATH" : "Aggiungere JAVA alla variabile di ambiente PATH.  L'esportazione di PATH deve essere effettuata in .bashrc su Linux.", 
"MORE_INFORMATION" : "Per ulteriori informazioni consultare: "

};
