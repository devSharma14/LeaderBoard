import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import Button from '@mui/material/Button';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


export default function LC_dashboard() {
  const navigate = useNavigate();
  const { formData } = useContext(GlobalContext);
  const { lcHandle, cfHandle, ccHandle } = formData; // Destructure from formData

  const [leetcodeData, setLeetcodeData] = useState([]);
  const [codeforcesData, setCodeforcesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const totalLeetCode = leetcodeData.find((item) => item.difficulty === 'All')?.count || 0;
  const easyLeetCode = leetcodeData.find((item) => item.difficulty === 'Easy')?.count || 0;
  const mediumLeetCode = leetcodeData.find((item) => item.difficulty === 'Medium')?.count || 0;
  const hardLeetCode = leetcodeData.find((item) => item.difficulty === 'Hard')?.count || 0;

  const totalCodeforces = codeforcesData.length || 0;
  const easyCodeforces = codeforcesData.filter((item) => item.difficulty === 'Easy').length;
  const mediumCodeforces = codeforcesData.filter((item) => item.difficulty === 'Medium').length;
  const hardCodeforces = codeforcesData.filter((item) => item.difficulty === 'Hard').length;

  const fetchLeetcodeData = useCallback(async (username) => {
    try {
      const response = await fetch(`https://leetcodeapi-v1.vercel.app/${username}`);
      const result = await response.json();
      setLeetcodeData(result[username]?.submitStatsGlobal?.acSubmissionNum || []);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch LeetCode data.');
      setLoading(false);
    }
  }, []);

  const fetchCodeforcesData = useCallback(async (username) => {
    try {
      const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
      const result = await response.json();
      setCodeforcesData(result.result || []);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch Codeforces data.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (lcHandle) {
      fetchLeetcodeData(lcHandle);
    }
    if (cfHandle) {
      fetchCodeforcesData(cfHandle);
    }
  }, [lcHandle, cfHandle, fetchLeetcodeData, fetchCodeforcesData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  // Prepare chart data for LeetCode
  const leetcodeChartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'LeetCode Questions',
        data: [easyLeetCode, mediumLeetCode, hardLeetCode],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      },
    ],
  };

  // Prepare chart data for Codeforces
  const codeforcesChartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        label: 'Codeforces Questions',
        data: [easyCodeforces, mediumCodeforces, hardCodeforces],
        backgroundColor: ['#2196f3', '#ff5722', '#9c27b0'],
      },
    ],
  };

  const chartOptions = {
    scales: {
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
        <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: '600', color: '#333', textAlign: 'center' }}>
          Coding Performance Dashboard
        </h2>

        {/* Display User Handles */}
        <div style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '600', textAlign: 'center' }}>
          <p>Leetcode Handle: {lcHandle}</p>
          <p>Codeforces Handle: {cfHandle}</p>
          <p>Codechef Handle: {ccHandle}</p>
        </div>

        {/* LeetCode Section */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>LeetCode Data</h3>
          <div style={{ marginTop: '20px' }}>
            <Bar data={leetcodeChartData} options={chartOptions} />
          </div>
          <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: '600', color: '#333', textAlign: 'center' }}>
            Total Questions Solved on LeetCode: {totalLeetCode}
          </div>
        </div>

        {/* Codeforces Section */}
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', marginTop: '20px' }}>
          <h3 style={{ textAlign: 'center' }}>Codeforces Data</h3>
          <div style={{ marginTop: '20px' }}>
            <Bar data={codeforcesChartData} options={chartOptions} />
          </div>
          <div style={{ marginTop: '20px', fontSize: '18px', fontWeight: '600', color: '#333', textAlign: 'center' }}>
            Total Questions Solved on Codeforces: {totalCodeforces}
          </div>
        </div>

        {/* Button to Leaderboard */}
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
