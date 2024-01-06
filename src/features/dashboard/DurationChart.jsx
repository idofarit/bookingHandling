import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const ChartBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: var(--shadow-box);
  background-color: var(--color-grey-0);
  padding-bottom: 8rem;
  padding-top: 2rem;
  @media (max-width: 1050px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .chart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .options {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 14px;

    .option {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      .title {
        display: flex;
        gap: 10px;
        align-items: center;

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
    }
  }
`;

const startDataLight = [
  {
    duration: "1 Day",
    value: 0,
    color: "#ef4444",
  },
  {
    duration: "2 days",
    value: 0,
    color: "#f97316",
  },
  {
    duration: "3 days",
    value: 0,
    color: "#eab308",
  },
  {
    duration: "4-5 days",
    value: 0,
    color: "#84cc16",
  },
  {
    duration: "6-7 days",
    value: 0,
    color: "#22c55e",
  },
  {
    duration: "8-14 days",
    value: 0,
    color: "#14b8a6",
  },
  {
    duration: "15-21 days",
    value: 0,
    color: "#3b82f6",
  },
  {
    duration: "21+ days",
    value: 0,
    color: "#a855f7",
  },
];

const startDataDark = [
  {
    duration: "1 night",
    value: 0,
    color: "#b91c1c",
  },
  {
    duration: "2 days",
    value: 0,
    color: "#c2410c",
  },
  {
    duration: "3 days",
    value: 0,
    color: "#a16207",
  },
  {
    duration: "4-5 days",
    value: 0,
    color: "#4d7c0f",
  },
  {
    duration: "6-7 days",
    value: 0,
    color: "#15803d",
  },
  {
    duration: "8-14 days",
    value: 0,
    color: "#0f766e",
  },
  {
    duration: "15-21 days",
    value: 0,
    color: "#1d4ed8",
  },
  {
    duration: "21+ days",
    value: 0,
    color: "#7e22ce",
  },
];

const prepareData = (startData, rents) => {
  const incArrayValue = (arr, field) => {
    return arr.map((obj) =>
      obj.duration === field ? { ...obj, value: obj.value + 1 } : obj
    );
  };

  const data = rents
    ?.reduce((arr, cur) => {
      const num = cur.numberDays;
      if (num === 1) return incArrayValue(arr, "1 night");
      if (num === 2) return incArrayValue(arr, "2 days");
      if (num === 3) return incArrayValue(arr, "3 days");
      if ([4, 5].includes(num)) return incArrayValue(arr, "4-5 days");
      if ([6, 7].includes(num)) return incArrayValue(arr, "6-7 days");
      if (num >= 8 && num <= 14) return incArrayValue(arr, "8-14 days");
      if (num >= 15 && num <= 21) return incArrayValue(arr, "15-21 days");
      if (num >= 21) return incArrayValue(arr, "21+ days");
      return arr;
    }, startData)
    .filter((obj) => obj.value > 0);

  return data;
};

const DurationChart = ({ confirmedRents }) => {
  const { isDarkMode } = useDarkMode();
  const startData = isDarkMode ? startDataDark : startDataLight;
  const data = prepareData(startData, confirmedRents);

  return (
    <>
      <ChartBox>
        <div className="chart">
          <ResponsiveContainer width="99%" height={300}>
            <Heading
              as="h3"
              style={{
                position: "relative",
                bottom: "2rem",
                // paddingTop: "1.5rem",
                marginTop: "2rem",
              }}
            >
              Rent duration summary
            </Heading>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <PieChart>
              <Pie
                data={data}
                nameKey="duration"
                innerRadius={"70%"}
                outerRadius={"90%"}
                paddingAngle={5}
                dataKey="value"
              >
                {data?.map((entry) => (
                  <Cell
                    fill={entry.color}
                    stroke={entry.color}
                    key={entry.duration}
                  />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                align="center"
                layout="vertical"
                iconSize={15}
                iconType="circle"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </ChartBox>
    </>
  );
};

export default DurationChart;
