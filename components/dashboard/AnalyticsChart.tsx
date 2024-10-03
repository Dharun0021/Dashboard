"use client";
import { LineChart, Line, ResponsiveContainer, XAxis, CartesianGrid, YAxis } from "recharts"; // Correct import from recharts
import { AnalyticsItem } from "@/types/analytics";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import data from "@/data/analytics"; // Assuming data is correctly imported

export const AnalyticsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics For This Year</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: 250 }}>
          <ResponsiveContainer>
            <LineChart width={1100} height={300} data={data}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc"/>
              <XAxis dataKey={'name'}/>
              <YAxis/>
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
