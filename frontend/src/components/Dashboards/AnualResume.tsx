import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { ChartData, ChartOptions } from "chart.js"; // PrimeReact usa Chart.js internamente
import { DashboardResponse } from "../../types/Dashboard.types";

interface AnualResumeProps {
    dataGraphics: DashboardResponse;
}

const AnualResume: React.FC<AnualResumeProps> = ({ dataGraphics }) => {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear());
    const [chartData, setChartData] = useState<ChartData<"bar"> | null>(null);
    const [chartOptions, setChartOptions] = useState<ChartOptions<"bar"> | null>(null);

    const staticYears = [2025, 2026, 2027, 2028, 2029, 2030];

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    useEffect(() => {
        if (dataGraphics && dataGraphics.monthly) {
            const months = [];
            const ingresos = [];
            const egresos = [];

            const filteredData = dataGraphics.monthly.filter((item) => {
                const year = parseInt(item.year_month.split("-")[0], 10);
                return year === selectedYear;
            });

            const monthData: { [key: string]: { ingresos: number, egresos: number } } = {};

            monthNames.forEach((month) => {
                monthData[month] = { ingresos: 0, egresos: 0 };
            });

            filteredData.forEach((item) => {
                const monthIndex = parseInt(item.year_month.split("-")[1], 10) - 1; 
                const monthName = monthNames[monthIndex];

                if (item.is_income) {
                    monthData[monthName].ingresos += parseFloat(item.total_amount);
                } else {
                    monthData[monthName].egresos += parseFloat(item.total_amount);
                }
            });

            Object.keys(monthData).forEach((month) => {
                months.push(month);
                ingresos.push(monthData[month].ingresos);
                egresos.push(monthData[month].egresos);
            });

            const data: ChartData<"bar"> = {
                labels: months,
                datasets: [
                    {
                        label: "Ingresos",
                        data: ingresos,
                        backgroundColor: "rgba(0, 149, 190, 1)",
                        hoverBackgroundColor: "rgba(0, 149, 190, 0.6)",
                        borderRadius: 10,
                        borderSkipped: false,
                        barThickness: 12, 
                    },
                    {
                        label: "Egresos",
                        data: egresos,
                        backgroundColor: "rgba(255, 107, 107, 1)",
                        hoverBackgroundColor: "rgba(255, 107, 107, 0.6)",
                        borderRadius: 20,
                        borderSkipped: false,
                        barThickness: 12, // Ajustar el grosor de las barras
                    },
                ],
            };

            const options: ChartOptions<"bar"> = {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false,
                        position: "top",
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        beginAtZero: true,
                    },
                },
            };

            setChartData(data);
            setChartOptions(options);
        }
    }, [selectedYear, dataGraphics]);

    return (
        <div className="py-6 px-4">
            <div className="flex w-full items-center justify-between flex-wrap">
                <h2 className="mb-3 font-semibold text-2xl">Analíticas del {selectedYear}</h2>
                <div className="flex items-center justify-end gap-6 w-full mb-4">
                    <div className="flex gap-2 items-center">
                        <div className="h-4 w-4 bg-primary rounded-full"></div>
                        <p>Ingreso</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="h-4 w-4 bg-secondary rounded-full"></div>
                        <p>Egreso</p>
                    </div>

                    <select
                        className="py-1 px-2 border-1 border-primary rounded-full"
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                    >
                        {staticYears.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div>
                {chartData && chartOptions ? (
                    <Chart
                        type="bar"
                        data={chartData}
                        options={chartOptions}
                        style={{ width: "100%", height: "250px" }}
                    />
                ) : (
                    <p>No hay datos disponibles para el año seleccionado.</p>
                )}
            </div>
        </div>
    );
};

export default AnualResume;
