import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Chart = () => {

    const students = [
        {
          id: 1,
          name: "John Doe",
          math: 85
        },
        {
          id: 2,
          name: "Jane Smith",
          math: 90
        },
        {
          id: 3,
          name: "Alice Johnson",
          math: 78
        },
        {
          id: 4,
          name: "Mark Davis",
          math: 92
        },
        {
          id: 5,
          name: "Emma Brown",
          math: 87
        },
        {
          id: 6,
          name: "Liam Wilson",
          math: 83
        }
      ];
      
    // name: 'Page A',
    // uv: 4000,
    // pv: 2400,
    // amt: 2400,

    return (
        <div>
        
{/*             

                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
           
 */}
<ResponsiveContainer width='100%' height="100%">
        <LineChart width={700} height={500} data={students}>
            <Line type="monotone" dataKey='math'></Line>
        </LineChart>
</ResponsiveContainer>

        </div>
    );
};

export default Chart;