import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Bar, Pie } from 'react-chartjs-2'; // Import Pie from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function DashBoard() {
  const navigate = useNavigate();
  const location = useLocation();

  const [contestData, setContestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]); // Initialize as an empty array

  const query = new URLSearchParams(location.search);
  const username = query.get('username');

  useEffect(() => {
    if (username) {
      fetchData(username);
      fetchContestData(username);
    }
  }, [username]);

  const fetchData = async (username) => {
    try {
      const response = await fetch(`https://leetcodeapi-v1.vercel.app/${username}`);
      const result = await response.json();
      setData(result[username]?.submitStatsGlobal?.acSubmissionNum || []);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch data.');
      setLoading(false);
    }
  };

  const fetchContestData = async (username) => {
    try {
      const response = await fetch(`https://leetcodeapi-v1.vercel.app/contest/${username}`);
      const result = await response.json();
      setContestData(result.userContestDetails || {});
    } catch (err) {
      setError('Failed to fetch contest data.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const total = data.find((item) => item.difficulty === 'All')?.count || 0;
  const easy = data.find((item) => item.difficulty === 'Easy')?.count || 0;
  const medium = data.find((item) => item.difficulty === 'Medium')?.count || 0;
  const hard = data.find((item) => item.difficulty === 'Hard')?.count || 0;

  const { attendedContestsCount, rating, globalRanking } = contestData || {};

  // Simplify Pie chart data to a single value
  const pieChartData = {
    datasets: [
      {
        data: [100], // Single value to fill the entire Pie chart
        backgroundColor: ['#FFB6C1'], // Light pink
        borderColor: ['#FFB6C1'], // Light pink for borders
        borderWidth: 2,
      },
    ],
  };

  const pieChartOptions = {
    plugins: {
      tooltip: {
        enabled: false, // Disable tooltips
      },
      legend: {
        display: false, // Hide legend
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: null, // Disable interaction
      intersect: false,
    },
    hover: {
      mode: null, // Disable hover effect
    },
  };

  // Data for the bar chart
  const chartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [easy, medium, hard],
        backgroundColor: ['#ADD8E6', '#F5B900', '#8B0A0A'],
        borderColor: ['blue', 'yellow', 'red'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        beginAtZero: true,
        barThickness: 20, // Set this value to control the width of the bars
        maxBarThickness: 30, // Optional: set maximum bar thickness to ensure bars don't get too wide
        categoryPercentage: 0.8, // Adjust the category width if needed
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          fontFamily: 'Open Sans',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            fontFamily: 'Open Sans',
            marginTop: '20px',
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
            {username}'s Coding Performance
          </h2>

          {/* Pie Chart */}
          <div
            style={{
              position: 'relative',
              height: '300px',
            }}
          >
            <Pie data={pieChartData} options={pieChartOptions} />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
                borderRadius: '10px',
                padding: '10px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div>Rating: {rating?.toFixed(2)}</div>
              <div>Total Contests: {attendedContestsCount}</div>
              <div>Global Rank: {globalRanking}</div>
            </div>
          </div>

          {/* Display Total Questions Solved */}
          <div
            style={{
              marginTop: '20px',
              fontSize: '18px',
              fontWeight: '600',
              color: '#333',
              textAlign: 'center',
            }}
          >
            Total Questions Solved: {total}
          </div>

          {/* Bar Chart */}
          <div style={{ marginTop: '20px' }}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
        {/* Check Leaderboard Button */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/leaderboard')}
            style={{
              padding: '10px 20px',
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '8px',
            }}
          >
            Check out Leaderboards
          </Button>
        </div>
      </div>
    </div>
  );
}
