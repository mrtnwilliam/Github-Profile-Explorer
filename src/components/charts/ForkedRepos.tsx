import { Repository } from "@/types";
import { calculateMostForkedRepos } from "@/utils";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const ForkedRepos = ({ repositories }: { repositories: Repository[] }) => {
  const mostForkedRepos = calculateMostForkedRepos(repositories);

  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#facd12",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Forked Repos</h2>
      <ChartContainer
        config={chartConfig}
        className="h-100 w-full max-w-full overflow-x-auto"
      >
        <BarChart accessibilityLayer data={mostForkedRepos}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="language"
            tickLine={false}
            tickMargin={10}
            interval={0}
            angle={-45} 
            textAnchor="end"
            height={60} 
          />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};
export default ForkedRepos;
