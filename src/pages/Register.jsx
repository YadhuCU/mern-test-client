import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { SERVER_URL } from "../serverURL";
import { useNavigate } from "react-router-dom";

Register.propTypes = {};

export function Register() {
  const toast = useToast();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    mobile: "",
    password: "",
    dateOfBirth: "",
    course: "",
    gender: "",
  });
  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log(userData);
    const {
      firstName,
      lastName,
      email,
      address,
      mobile,
      password,
      dateOfBirth,
      course,
      gender,
    } = userData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !address ||
      !mobile ||
      !password ||
      !dateOfBirth ||
      !course ||
      !gender
    ) {
      toast({
        title: "Warning...",
        description: "Please fill the form compleately.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      return;
    }

    try {
      const result = await fetch(`${SERVER_URL}/users/register`, {
        method: "POST",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          address,
          mobile,
          password,
          dateOfBirth,
          course,
          gender,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const resutlJson = await result.json();
      toast({
        title: "Success...",
        description: "Student Data registerd successfully.",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
      setTimeout(() => {
        navigate("/home");
      }, 3000);
    } catch (err) {
      console.log(err);
    }

    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      mobile: "",
      password: "",
      dateOfBirth: "",
      course: "",
      gender: "",
    });
  };

  return (
    <div className="flex justify-center items-center containter lg:container w-full h-screen mx-auto">
      <div className="w-full grid gap-2 grid-cols-[1fr_,2fr] bg-slate-200 shadow-2xl rounded-3xl overflow-hidden">
        <div className="w-full h-full bg-teal-600 flex  text-slate-200 flex-col justify-center p-5 rounded-r-full">
          <h1 className="text-8xl font-bold text-start">Welcome</h1>
          <p className="text-xl text-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            nobis{" "}
          </p>
        </div>
        <div className="w-full h-full p-8 ">
          <h1 className="text-3xl mb-5 font-bold text-center text-teal-600">
            Apply as a student
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-4">
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="Enter your First Name"
                  value={userData.firstName}
                  onChange={(e) =>
                    setUserData({ ...userData, firstName: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="Enter your Last Name"
                  value={userData.lastName}
                  onChange={(e) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  variant="filled"
                  type="email"
                  placeholder="Enter your Email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea
                  variant="filled"
                  placeholder="Enter your address"
                  value={userData?.address}
                  onChange={(e) =>
                    setUserData({ ...userData, address: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  colorScheme="teal"
                  value={userData.gender}
                  onChange={(e) => setUserData({ ...userData, gender: e })}
                >
                  <div className="flex gap-2">
                    <Radio value="Male">Male</Radio>
                    <Radio value="Female">Female</Radio>
                  </div>
                </RadioGroup>
              </FormControl>
            </div>
            <div className="grid gap-4">
              <FormControl>
                <FormLabel>Mobile</FormLabel>
                <Input
                  variant="filled"
                  type="text"
                  placeholder="Enter your Mobile Number"
                  value={userData.mobile}
                  onChange={(e) =>
                    setUserData({ ...userData, mobile: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  variant="filled"
                  type="password"
                  placeholder="Enter your password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Date Of Birth</FormLabel>
                <Input
                  variant="filled"
                  type="date"
                  value={userData.dateOfBirth}
                  onChange={(e) =>
                    setUserData({ ...userData, dateOfBirth: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Course</FormLabel>
                <Select
                  variant="filled"
                  colorScheme="teal"
                  placeholder="Select option"
                  value={userData.course}
                  onChange={(e) =>
                    setUserData({ ...userData, course: e.target.value })
                  }
                >
                  <option value="Bsc Mathmatics">Bsc Mathematics</option>
                  <option value="Bca">Computer Science</option>
                  <option value="B Tec">B Tech</option>
                </Select>
              </FormControl>
              <FormControl>
                <Button onClick={handleRegister} colorScheme="teal">
                  Register
                </Button>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
Register.propTypes = {};
