const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({ path: "./config.env" });
console.log(process.env);
// mongodb veritabanı ile bağlantı sağla
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("veritabanı ile bağlantı kuruldu"))
  .catch((err) =>
    console.log("hata!! veri tabanına bağlanırken sorun oluştu.", err)
  );

// serverı ayağa kaldır

app.listen(process.env.PORT, () => {
  console.log(`Uygulama ${process.env.PORT} portunu dinlemeye başladı`);
});
