import { Configuration, LogLevel } from "@azure/msal-browser";

// Objeto de configuración que se pasará a Msal en la creación
export const msalConfig: Configuration = {
  auth: {
    clientId: "5422ba68-a522-4fe2-977d-03b7acb04798",
    authority: "https://login.microsoftonline.com/common",
    knownAuthorities: [],
    redirectUri: "http://localhost:3000/",
    postLogoutRedirectUri: "http://localhost:3000/",
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: "sessionStorage", // Esto configura dónde se almacenará su caché
    storeAuthStateInCookie: true, // Configure esto en "verdadero" si tiene problemas en IE11 o Edge
    secureCookies: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (
        level: LogLevel,
        message: string,
        containsPii: boolean
      ): void => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(level, message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
      piiLoggingEnabled: true,
    },
    windowHashTimeout: 60000,
    iframeHashTimeout: 60000,
    loadFrameTimeout: 0,
  },
};

//TODO scope de prueba para configurar api
export const apiConfig = {
  b2cScopes: ["https://contoso.onmicrosoft.com/tasks/tasks.read"],
  webApi: "https://localhost:7235/",
};

// Agregue aquí ámbitos para el token de identificación que se usará en los puntos finales de MS Identity Platform.
export const loginRequest = {
  scopes: ["User.Read"]
};

/**
 * Agregue aquí los alcances a solicitar al obtener un token de acceso para MS Graph API. Para más información, ver:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
