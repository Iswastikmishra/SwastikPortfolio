import React from 'react';
import ApexCharts from 'react-apexcharts';

const SkillsChart = () => {
  const chartConfig = {
    series: [
      {
        name: 'Proficiency',
        data: [
          { x: 'C', y: 4 },
          { x: 'Java', y: 1 },
          { x: 'Python', y: 2 },
          { x: 'JavaScript', y: 2 },
          { x: 'React.js', y: 2 },
          { x: 'Node.js', y: 1 },
          { x: 'MongoDB', y: 2 },
        ], // { x: skill, y: proficiency level }
      },
    ],
    chart: {
      type: 'bar',
      height: 400,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        vertical: true,
        columnWidth: '30%',
        borderRadius: 4,
      },
    },
    yaxis: {
      title: {
        text: 'Proficiency Level',
      },
      labels: {
        formatter: function (value) {
          if (value === 1) return '1';
          if (value === 2) return '2';
          if (value === 3) return '3';
          if (value === 4) return '4';
          if (value === 5) return '5';
          if (value === 6) return '6';
          if (value === 7) return '7';
          if (value === 8) return '8';
          if (value === 9) return '9';
          if (value === 10) return '10';
          return '';
        },
      },
    },
    xaxis: {
      title: {
        text: 'Skills',
      },
      categories: ['C', 'Java', 'Python', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'], // Skills categories
    },
    grid: {
      show: true,
      borderColor: '#e0e0e0',
      strokeDashArray: 6,
    },
    fill: {
      opacity: 1,
      colors: ['#007bff'],
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          if (val === 1) return '1';
          if (val === 2) return '2';
          if (val === 3) return '3';
          // if (val === 4) return '4';
          // if (val === 5) return '5';
          // if (val === 6) return '6';
          // if (val === 7) return '7';
          // if (val === 8) return '8';
          // if (val === 9) return '9';
          // if (val === 10) return '10';
          return '';
        },
      },
    },
    colors: ['#020617'],
  };

  return (
    <div id="skills-chart">
      <ApexCharts options={chartConfig} series={chartConfig.series} type="bar" height={300}/>
    </div>
  );
};

export default SkillsChart;
