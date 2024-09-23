import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';

// Dummy data generation function
const generateDummyData = () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack', 'Karen', 'Leo', 'Mia', 'Nina', 'Oliver', 'Paul', 'Quinn', 'Rose', 'Sam', 'Tina', 'Ursula', 'Vera', 'Will', 'Xander', 'Yara', 'Zane'];
  return Array.from({ length: 50 }, (_, index) => ({
    rank: index + 1,
    name: names[index % names.length],
    leetcodeId: `user${index + 1}`,
    rating: Math.floor(Math.random() * 1500) + 500, // Random rating between 500 and 2000
  }));
};

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 20;
  const dummyData = generateDummyData();

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = dummyData.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(dummyData.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Leaderboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>LeetCode ID</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUsers.map((user) => (
              <TableRow key={user.leetcodeId}>
                <TableCell>{user.rank}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.leetcodeId}</TableCell>
                <TableCell>{user.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <Button
            key={pageNumber}
            variant={currentPage === pageNumber ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handlePageChange(pageNumber)}
            style={{ margin: '0 5px' }}
          >
            {pageNumber}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
