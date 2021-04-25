import fetch from "node-fetch";

export const getCsgoTournaments = async (req, res) => {
  try {
    const api_url = `https://api.pandascore.co/csgo/tournaments/upcoming?token=L-KSCBAZ-Cxv71k544VKEqbfcH7t1ZNUrdBFThn-P8fFEG_EFlY`;

    const profileResponse = await fetch(api_url);
    const profile = await profileResponse.json();

    res.send(profile);
    res.status(200);
  } catch (error) {
    console.log("Fuck");
    res.status(404).json({ message: error.message });
  }
};
