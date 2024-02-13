import PropTypes from "prop-types";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SERVER_URL } from "../serverURL";
import { useNavigate } from "react-router-dom";

Home.propTypes = {};

export function Home() {
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const result = await fetch(`${SERVER_URL}/users`);
        const resultJson = await result.json();
        setAllUsers(resultJson);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  return (
    <div className="flex flex-col gap-2 justify-start items-center py-10 containter lg:container w-full h-screen mx-auto">
      <div className="self-start">
        <Button onClick={() => navigate("/")}>Back</Button>
      </div>
      <div className="w-full bg-teal-200 rounded-3xl shadow-2xl overflow-hidden">
        <TableContainer>
          <Table size="lg">
            <Thead>
              <Tr>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Address</Th>
                <Th>Email</Th>
                <Th>Mobile</Th>
                <Th>DOB</Th>
                <Th>Gender</Th>
                <Th>Cource</Th>
              </Tr>
            </Thead>
            <Tbody>
              {allUsers.length > 0
                ? allUsers.map((user, index) => (
                    <Tr key={index}>
                      <Td>{user.firstName}</Td>
                      <Td>{user.lastName}</Td>
                      <Td>{user.address}</Td>
                      <Td>{user.email}</Td>
                      <Td>{user.mobile}</Td>
                      <Td>{user.dateOfBirth}</Td>
                      <Td>{user.gender}</Td>
                      <Td>{user.course}</Td>
                    </Tr>
                  ))
                : null}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
