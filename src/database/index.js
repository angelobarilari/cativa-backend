const fs = require("fs");
const path = require("path");

class Database {
    constructor() {
        this.filePath = path.resolve(__dirname, "./db.json");
    }

    readDatabase() {
        try {
            const data = fs.readFileSync(this.filePath, "utf8");

            return JSON.parse(data);
        } catch (error) {
            if (error.code === "ENOENT") return [];
            throw error;
        }
    }

    writeDatabase(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
    }
}

module.exports = new Database();
