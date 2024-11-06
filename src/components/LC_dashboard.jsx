import React, { useContext, useEffect, useState, useCallback } from 'react';
import { GlobalContext } from '../context/GlobalContext';

export default function LC_dashboard() {
  const { formData } = useContext(GlobalContext);
  const { lcHandle, cfHandle, ccHandle } = formData;

  const [leetcodeRatingData, setLeetcodeRatingData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [codechefData, setCodechefData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchLeetcodeData = useCallback(async (username) => {
    try {
      const response = await fetch(`https://leetcodeapi-v1.vercel.app/${username}`);
      const result = await response.json();
      setLeetcodeData(result[username]?.submitStatsGlobal?.acSubmissionNum || []);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch Leetcode data');
      setLoading(false);
    }
  }, []);

  const fetchLeetcodeRatingData = useCallback(async (username) => {
    try {
      const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/contest`);
      const result = await response.json();

      // Log to confirm structure
      console.log("lc rating result: ", result);

      // Set the data directly as result since it's not nested under result.result[0]
      setLeetcodeRatingData(result);
      setLoading(false);
    } catch (err) {
      console.log("Error fetching Leetcode data:", err.message);
      setLoading(false);
    }
  }, []);


  const fetchCodeforcesData = useCallback(async (username) => {
    try {
      const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
      const result = await response.json();

      setCodeforcesData(result.result[0]);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch Codeforces data.');
      setLoading(false);
    }
  }, []);

  const fetchCodechefData = useCallback(async (username) => {
    try {
      const response = await fetch(`https://codechef-api.vercel.app/handle/${username}`);
      const result = await response.json();
      setCodechefData(result || {});
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch Codechef data.');
      setLoading(false);
    }
  }, []);

  // Leetcode variables
  const totalLeetCode = leetcodeData?.find((item) => item.difficulty === 'All')?.count || 0;
  const easyLeetCode = leetcodeData?.find((item) => item.difficulty === 'Easy')?.count || 0;
  const mediumLeetCode = leetcodeData?.find((item) => item.difficulty === 'Medium')?.count || 0;
  const hardLeetCode = leetcodeData?.find((item) => item.difficulty === 'Hard')?.count || 0;

  // Leetcode rating variables
  const contestAttend = leetcodeRatingData?.contestAttend || 0;
  const contestRating = leetcodeRatingData?.contestRating || 0;
  const contestGlobalRanking = leetcodeRatingData?.contestGlobalRanking || 0;
  const totalParticipants = leetcodeRatingData?.totalParticipants || 0;
  const contestTopPercentage = leetcodeRatingData?.contestTopPercentage || 0;
  const contestBadge = leetcodeRatingData?.contestBadges?.name || 'No Badge';

  // console.log("contestAttend:", contestAttend);

  // Codeforces Variables
  const codeforcesCurrentRating = codeforcesData?.rating || 0;
  const codeforcesHighestRating = codeforcesData?.maxRating || 0;
  const codeforcesRank = codeforcesData?.rank || 'N/A';
  const codeforcesContributions = codeforcesData?.contribution || 0;
  const codeforcesFriends = codeforcesData?.friendOfCount || 0;
  const codeforcesMaxRank = codeforcesData?.maxRank || 0;

  // Codechef Variables
  const codechefName = codechefData.name || '';
  const codechefCurrentRating = codechefData.currentRating || 0;
  const codechefHighestRating = codechefData.highestRating || 0;
  const codechefGlobalRank = codechefData.globalRank || 'N/A';
  const codechefCountryRank = codechefData.countryRank || 'N/A';
  const codechefStars = codechefData.stars || 'N/A';
  const codechefCountryName = codechefData.countryName || 'N/A';

  useEffect(() => {
    if (lcHandle) {
      fetchLeetcodeData(lcHandle);
      fetchLeetcodeRatingData(lcHandle);
    }
    if (cfHandle) {
      fetchCodeforcesData(cfHandle);
    }
    if (ccHandle) {
      fetchCodechefData(ccHandle);
    }
  }, [lcHandle, fetchLeetcodeRatingData, fetchLeetcodeData, cfHandle, ccHandle, fetchCodeforcesData, fetchCodechefData]);

  if (loading) {
    return <p style={{ color: 'white' }}>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: 'white' }}>{error}</p>;
  }

  return (
    <div style={{ color: 'white' }}>
      <h2 style={{ textAlign: 'center' }}>Coding Performance Dashboard</h2>

      {/* LeetCode Table */}

      <table style={{ width: '100%', margin: '20px 0', border: '1px solid #ddd', textAlign: 'center', color: 'white' }}>
        <thead>
          <tr>
            <th colSpan="2">LeetCode Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Submissions</td>
            <td>{totalLeetCode}</td>
          </tr>
          <tr>
            <td>Easy</td>
            <td>{easyLeetCode}</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>{mediumLeetCode}</td>
          </tr>
          <tr>
            <td>Hard</td>
            <td>{hardLeetCode}</td>
          </tr>
          <tr>
            <td>Total Contests Attended</td>
            <td>{contestAttend}</td>
          </tr>
          <tr>
            <td>Contest Rating</td>
            <td>{contestRating.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Global Ranking</td>
            <td>{contestGlobalRanking}</td>
          </tr>
          <tr>
            <td>Total Participants</td>
            <td>{totalParticipants}</td>
          </tr>
          <tr>
            <td>Top Percentage</td>
            <td>{contestTopPercentage}%</td>
          </tr>
          <tr>
            <td>Contest Badge</td>
            <td>{contestBadge}</td>
          </tr>
        </tbody>
      </table>



      {/* Codeforces Table */}
      <table style={{ width: '100%', margin: '20px 0', border: '1px solid #ddd', textAlign: 'center', color: 'white' }}>
        <thead>
          <tr>
            <th colSpan="2">Codeforces Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Current Rating</td>
            <td>{codeforcesCurrentRating}</td>
          </tr>
          <tr>
            <td>Highest Rating</td>
            <td>{codeforcesHighestRating}</td>
          </tr>
          <tr>
            <td>Total Friends</td>
            <td>{codeforcesFriends}</td>
          </tr>
          <tr>
            <td>Rank</td>
            <td>{codeforcesRank}</td>
          </tr>
          <tr>
            <td>Max Rank</td>
            <td>{codeforcesMaxRank}</td>
          </tr>
          <tr>
            <td>Total Contributions</td>
            <td>{codeforcesContributions}</td>
          </tr>
        </tbody>
      </table>

      {/* Codechef Table */}
      <table style={{ width: '100%', margin: '20px 0', border: '1px solid #ddd', textAlign: 'center', color: 'white' }}>
        <thead>
          <tr>
            <th colSpan="2">CodeChef Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Username</td>
            <td>{codechefName}</td>
          </tr>
          <tr>
            <td>Current Rating</td>
            <td>{codechefCurrentRating}</td>
          </tr>
          <tr>
            <td>Highest Rating</td>
            <td>{codechefHighestRating}</td>
          </tr>
          <tr>
            <td>Global Rank</td>
            <td>{codechefGlobalRank}</td>
          </tr>
          <tr>
            <td>Country Rank</td>
            <td>{codechefCountryRank}</td>
          </tr>
          <tr>
            <td>Stars</td>
            <td>{codechefStars}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{codechefCountryName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
