import axios from "axios";

export default axios.create({ baseURL: "https://opentdb.com/" });

// ("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");