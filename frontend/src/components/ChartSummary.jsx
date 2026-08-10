import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const ChartSummary = ({ scores = {} }) => {
  const {
    xss = 0,
    sql = 0,
    csrf = 0,
    ssl = 0,
    headers = 0,
    subdomain = 0,
  } = scores;

  useEffect(() => {
    const chartDom = document.getElementById('vulnerabilityChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);
    const resizeHandler = () => myChart.resize();

    const option = {
      animation: true,
      radar: {
        indicator: [
          { name: 'XSS', max: 10 },
          { name: 'SQL Injection', max: 10 },
          { name: 'CSRF', max: 10 },
          { name: 'SSL', max: 10 },
          { name: 'Headers', max: 10 },
          { name: 'Subdomain', max: 10 },
        ],
        radius: 100,
        axisName: {
          color: '#fff',
          fontSize: 12,
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(0, 255, 157, 0.05)', 'rgba(0, 255, 157, 0.1)'],
          },
        },
        axisLine: {
          lineStyle: { color: 'rgba(0, 255, 157, 0.3)' },
        },
        splitLine: {
          lineStyle: { color: 'rgba(0, 255, 157, 0.3)' },
        },
      },
      series: [
        {
          name: 'Security Scores',
          type: 'radar',
          data: [
            {
              value: [xss, sql, csrf, ssl, headers, subdomain],
              name: 'Vulnerability Scores',
              areaStyle: { color: 'rgba(0, 255, 157, 0.2)' },
              lineStyle: { color: '#00FF9D' },
              itemStyle: { color: '#00FF9D' },
            },
          ],
        },
      ],
    };

    myChart.setOption(option);
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      myChart.dispose();
    };
  }, [xss, sql, csrf, ssl, headers, subdomain]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="md:col-span-1 bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Vulnerability Overview</h3>
        <div id="vulnerabilityChart" className="w-full h-64"></div>
      </div>
      <div className="md:col-span-2 bg-[#1E1E1E] rounded-lg p-6 border border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Score Breakdown</h3>
        <div className="space-y-3">
          {[
            { label: 'XSS', value: xss },
            { label: 'SQL Injection', value: sql },
            { label: 'CSRF', value: csrf },
            { label: 'SSL', value: ssl },
            { label: 'Security Headers', value: headers },
            { label: 'Subdomain Takeover', value: subdomain },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="text-gray-400 text-sm w-36">{label}</span>
              <div className="flex-1 bg-gray-800 rounded-full h-2">
                <div
                  className="h-2 rounded-full transition-all duration-700"
                  style={{
                    width: `${(value / 10) * 100}%`,
                    backgroundColor:
                      value >= 8 ? '#22c55e' : value >= 5 ? '#eab308' : '#ef4444',
                  }}
                />
              </div>
              <span
                className={`text-sm font-bold w-8 text-right ${
                  value >= 8
                    ? 'text-green-400'
                    : value >= 5
                    ? 'text-yellow-400'
                    : 'text-red-400'
                }`}
              >
                {value}/10
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-6">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center">
            <i className="fas fa-share-alt mr-2"></i>
            Share Report Link
          </button>
          <button
            className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center"
            onClick={() => window.location.reload()}
          >
            <i className="fas fa-redo mr-2"></i>
            Rescan This Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartSummary;
