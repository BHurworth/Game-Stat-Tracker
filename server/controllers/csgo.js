//import StudentData from "../models/student.js";
import fetch from "node-fetch";

export const getCsgoStats = async (req, res) => {
  const steamId = req.params.id;
  console.log(steamId);

  try {
    const api_url = `https://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=730&key=F09E4552A11EE096D0ABC2A37100B371&steamid=${steamId}`;




    //76561198106917090

    const profileResponse = await fetch(api_url);
    const profile = await profileResponse.json();

    // console.log(profile.json());
    res.send(profile);
    res.status(200);

    //res.status(200).json(allStudents);
  } catch (error) {
    console.log("Fuck");
    res.status(404).json({ message: error.message });
  }
};

// export const getStudents = async (req, res) => {
//   try {
//     const allStudents = await StudentData.find();

//     res.status(200).json(allStudents);
//   } catch (error) {
//     res.status(404).json({ message: err.message });
//   }
// };

// export const createStudent = async (req, res) => {
//   const student = req.body;
//   console.log(student);
//   const newStudent = new StudentData(student);

//   try {
//     await newStudent.save();
//     res.status(201).json(newStudent);
//     console.log("yo");
//   } catch (error) {
//     res.status(409).json({ message: err.message });
//   }
// };

// export const deleteStudent = async (req, res) => {
//   const id = req.params.id;
//   try {
//     await StudentData.findByIdAndRemove(id).exec();
//     res.send("Successfully deleted");
//   } catch (error) {
//     console.log(error);
//     res.status(404);
//   }
// };
