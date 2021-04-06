import fetch from "node-fetch";

export const getSteamData = async (req, res) => {
  const steamId = req.params.id;
  console.log(steamId);

  try {
    const api_url = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=F09E4552A11EE096D0ABC2A37100B371&steamids=${steamId}`;

    //76561198106917090

    const profileResponse = await fetch(api_url);
    const profile = await profileResponse.json();
    // console.log(profile.json());
    res.send(profile);
    res.status(200);

    //res.status(200).json(allStudents);
  } catch (error) {
    console.log("Fuck");
    res.status(404).json({ message: err.message });
  }
};
