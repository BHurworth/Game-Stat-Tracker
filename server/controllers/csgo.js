//import StudentData from "../models/student.js";
import fetch from "node-fetch";

export const getCsgoStats = async (req, res) => {
  const steamId = req.params.id;
  console.log(steamId);

  try {
    const api_url = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=F09E4552A11EE096D0ABC2A37100B371&steamid=${steamId}`;

    const profileResponse = await fetch(api_url);
    const profile = await profileResponse.text();

    res.send(profile);
    res.status(200);

    //res.status(200).json(allStudents);
  } catch (error) {
    console.log("Fuck");
    res.status(404).json({ message: error.message });
  }
};
