import fetch from "node-fetch";

export const getCsgoTournament = async (req, res) => {

  try {
    const api_url = `https://api.pandascore.co/csgo/tournaments`;

    const profileResponse = await fetch(api_url);
    const profile = await profileResponse.json();

   
    res.send(profile);
    res.status(200);

  } catch (error) {
    console.log("Fuck");
    res.status(404).json({ message: error.message });
  }
};
