import { app } from "electron";
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from "electron-devtools-installer";
import serve from "electron-serve";
import { createWindow } from "./helpers";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main", {
    width: 1000,
    height: 600,
    titleBarStyle: "hidden",
  });

  if (isProd) {
    await mainWindow.loadURL("app://./index.html");
  } else {
    const port = process.argv[2];

    installExtension([REACT_DEVELOPER_TOOLS])
      .then((name) => console.log(name))
      .catch((err) => console.log(err));
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = "1";

    await mainWindow.loadURL(`http://localhost:${port}/index`);
    mainWindow.webContents.openDevTools();
  }
})();

app.on("window-all-closed", () => {
  app.quit();
});
