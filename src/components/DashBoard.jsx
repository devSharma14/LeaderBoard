import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { BarChart } from '@mui/x-charts/BarChart';
import Button from '@mui/material/Button'; // Import Button from Material-UI

export default function DashBoard() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigate = () => {
    navigate('/leaderboard'); // Navigate to /leaderboard when the button is clicked
  };

  return (
    <div 
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Open Sans',
      }}
    >
      <h2 
        style={{
          marginBottom: '20px',
          fontSize: '24px',
          fontWeight: '600',
          color: '#333',
          textAlign: 'center',
        }}
      >
        Coding Performance
      </h2>
      
      {/* Chart 1: Total Questions Solved */}
      <h3 
        style={{
          marginBottom: '10px',
          fontSize: '18px',
          fontWeight: '500',
          color: '#555',
          textAlign: 'center',
        }}
      >
        Total Questions Solved
      </h3>
      <BarChart
        series={[{ data: [200, 150, 100] }]}
        height={250}
        width={400}
        xAxis={[
          {
            data: ['LeetCode', 'CodeForces', 'CodeChef'],
            scaleType: 'band',
            axis: {
              show: true,
              label: 'Platform',
              style: {
                stroke: 'black', 
                ticks: { stroke: 'black' },
                tickLabels: { fill: 'black', fontSize: '14px' },
                grid: { stroke: 'rgba(0, 0, 0, 0.2)' },
              },
            },
          },
        ]}
        yAxis={[
          {
            axis: {
              show: true,
              label: 'Total Questions',
              style: {
                stroke: 'black', 
                ticks: { stroke: 'black' },
                tickLabels: { fill: 'black', fontSize: '14px' },
                grid: { stroke: 'rgba(0, 0, 0, 0.2)' },
              },
            },
          },
        ]}
        margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
        barGapRatio={0.2}
        barRadius={4}
      />
      
      {/* Chart 2: Current Rating */}
      <h3 
        style={{
          marginBottom: '10px',
          marginTop: '30px',
          fontSize: '18px',
          fontWeight: '500',
          color: '#555',
          textAlign: 'center',
        }}
      >
        Current Rating
      </h3>
      <BarChart
        series={[{ data: [1800, 1600, 1400] }]}
        height={250}
        width={400}
        xAxis={[
          {
            data: ['LeetCode', 'CodeForces', 'CodeChef'],
            scaleType: 'band',
            axis: {
              show: true,
              label: 'Platform',
              style: {
                stroke: 'black', 
                ticks: { stroke: 'black' },
                tickLabels: { fill: 'black', fontSize: '14px' },
                grid: { stroke: 'rgba(0, 0, 0, 0.2)' },
              },
            },
          },
        ]}
        yAxis={[
          {
            axis: {
              show: true,
              label: 'Rating',
              style: {
                stroke: 'black', 
                ticks: { stroke: 'black' },
                tickLabels: { fill: 'black', fontSize: '14px' },
                grid: { stroke: 'rgba(0, 0, 0, 0.2)' },
              },
            },
          },
        ]}
        margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
        barGapRatio={0.2}
        barRadius={4}
      />

      {/* Check Leaderboard Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNavigate}
          style={{
            padding: '10px 20px',
            fontSize: '18px',
            fontWeight: '600',
            borderRadius: '8px',
          }}
        >
          Check out Leaderboards!!
        </Button>
      </div>
    </div>
  );
}
