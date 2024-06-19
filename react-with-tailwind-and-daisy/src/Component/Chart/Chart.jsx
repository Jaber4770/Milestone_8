import { LineChart, Line, XAxis, YAxis, BarChart, Bar, PieChart, Pie } from 'recharts';



const Chart = () => {

    const students = [
        {
            id: 1,
            name: "John Doe",
            math: 75,
            phyics: 80
        },
        {
            id: 2,
            name: "Jane Smith",
            math: 80,
            phyics: 80
        },
        {
            id: 3,
            name: "Alice Johnson",
            math: 98,
            phyics: 80
        },
        {
            id: 4,
            name: "Mark Davis",
            math: 62,
            phyics: 80
        },
        {
            id: 5,
            name: "Emma Brown",
            math: 87,
            phyics: 80
        },
        {
            id: 6,
            name: "Liam Wilson",
            math: 73,
            phyics: 80
        }
    ];

    return (
        <>
            <LineChart width={700} height={500} data={students}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey='math' stroke='#82ca9d' strokeWidth={2} />
            </LineChart>

            <LineChart width={500} height={500} data={students}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Line type="monotone" dataKey="math" stroke='white' strokeWidth={2}></Line>
            </LineChart>

            <BarChart height={600} width={600} data={students}>
                <XAxis></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="math" stroke='green' strokeWidth={2}></Bar>
            </BarChart>

            <PieChart height={300} width={300} >
                <Pie data={students} dataKey="math" cy="50%" cx="50%" outerRadius={60} fill="#82ca9d" strokeWidth={2}></Pie>
                <Pie data={students} dataKey="phyics" cy="50%" cx="50%" innerRadius={70} outerRadius={90} stroke='blue' strokeWidth={2} label fill='green'></Pie>
            </PieChart>
        </>
    );
};

export default Chart;