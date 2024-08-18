const info = {
    Name: "Swastik Mishra",

};

const NameLogo = {
    fontFamily: 'Dancing Script',
    fontWeight: '700',
    fontSize: '35px',
    color: 'rgb(35,52,86)',
    fontStyle: 'normal',
};

const chartConfig = {
    series: [
        {
            name: 'Skills',
            data: [7, 4, 5.5, 6, 5, 4, 6],
        },
    ],
    chart: {
        type: 'bar',
        height: 240,
        toolbar: {
            show: false,
        },
    },
    title: {
        show: '',
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
            borderRadius: 2,
        },
    },
    xaxis: {
        title: {
            text: 'Skills',
        },
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        labels: {
            style: {
                colors: '#616161',
                fontSize: '12px',
                fontFamily: 'inherit',
                fontWeight: 400,
            },
        },
        categories: [
            'C', 'Java', 'Python', 'JavaScript', 'React.js', 'Node.js', 'MongoDB'
        ],
    },
    yaxis: {
        title: {
            text: 'Proficiency Level (Out of 10)',
        },
        labels: {
            style: {
                colors: '#616161',
                fontSize: '12px',
                fontFamily: 'inherit',
                fontWeight: 400,
            },
        },
    },
    grid: {
        show: true,
        borderColor: '#dddddd',
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: true,
            },
        },
        padding: {
            top: 5,
            right: 20,
        },
    },
    fill: {
        opacity: 0.8,
    },
    tooltip: {
        theme: 'dark',
    },
};

const projects = [
    {
        id: 1,
        title: "Facial Recognition Attendance System",
        description: "A system that uses facial recognition technology to mark attendance automatically.",
        technologies: ["Python", "OpenCV",],
    },
    {
        id: 2,
        title: "E-commerce Website",
        description: "An online shopping platform with integrated payment gateway and user-friendly UI.",
        technologies: ["React", "Node.js", "Braintree API"],
    },
    {
        id: 3,
        title: "Cultural-Heritage Web Application",
        description: "A platform to showcase cultural heritage sites with rich multimedia content.",
        technologies: ["JavaScript", "Mongodb", "Node.js", "Express.js", "React.js"],
    },
    {
        id: 4,
        title: "Static Music Player",
        description: "A music player built using HTML, CSS, and JavaScript that allows users to play downloaded songs only.",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 5,
        title: "API-based News Website",
        description: "A dynamic news website created using HTML, CSS, JavaScript, and Node.js that fetches and displays news from an API.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    },
    {
        id: 6,
        title: "Portfolio Website",
        description: "A personal portfolio website developed using ReactJS, TailwindCSS, and JavaScript, showcasing projects and skills.",
        technologies: ["ReactJS", "TailwindCSS", "JavaScript"],
    },
];

export {
    info, NameLogo, chartConfig, projects,
};