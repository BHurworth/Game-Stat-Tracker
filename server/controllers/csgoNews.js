import fetch from "node-fetch";

export const getCsgoNews = async (req, res) => {
  try {
    const api_url =
      "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=730&count=12&maxlength=300&format=json";

    const profileResponse = await fetch(api_url);
    const profile = await profileResponse.json();

    res.send(profile);
    res.status(200);

    //res.status(200).json(allStudents);
  } catch (error) {
    console.log("Fuck");
    res.status(404).json({ message: error.message });
  }
};
