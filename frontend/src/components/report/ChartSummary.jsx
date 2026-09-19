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
        radius: 90,
        axisName: {
          color: '#fff',
          fontSize: 12,
          fontWeight: 'bold',
          fontFamily: 'monospace'
        },
        splitArea: {
          areaStyle: {
            color: ['#121212', '#1A1A1A'],
          },
        },
        axisLine: {
          lineStyle: { color: '#00FF9C' },
        },
        splitLine: {
          lineStyle: { color: '#00FF9C' },
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
              areaStyle: { color: 'rgba(0, 255, 156, 0.4)' },
              lineStyle: { color: '#00FF9C', width: 2 },
              itemStyle: { color: '#00FF9C', borderWidth: 2 },
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 font-mono">
      <div className="md:col-span-1 bg-[#121212] neo-border p-6 shadow-[6px_6px_0_0_#00FF9C]">
        <h3 className="text-xl font-bold mb-4 text-[#00FF9C] uppercase tracking-widest">> VULN_OVERVIEW</h3>
        <div id="vulnerabilityChart" className="w-full h-64 bg-[#1A1A1A] neo-border p-2"></div>
      </div>
      
      <div className="md:col-span-2 bg-[#121212] neo-border p-6 shadow-[6px_6px_0_0_#00FF9C]">
        <h3 className="text-xl font-bold mb-6 text-[#00FF9C] uppercase tracking-widest">> SCORE_BREAKDOWN</h3>
        <div className="space-y-4 bg-[#1A1A1A] p-4 neo-border">
          {[
            { label: 'XSS', value: xss },
            { label: 'SQL_INJECTION', value: sql },
            { label: 'CSRF', value: csrf },
            { label: 'SSL', value: ssl },
            { label: 'SEC_HEADERS', value: headers },
            { label: 'SUBDOMAIN_T.O.', value: subdomain },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <span className="text-white font-bold text-sm w-40 truncate border-r-2 border-[#00FF9C] pr-2">{label}</span>
              <div className="flex-1 bg-[#121212] border-2 border-[#00FF9C] h-4 p-[1px]">
                <div
                  className="h-full transition-all duration-700"
                  style={{
                    width: `${(value / 10) * 100}%`,
                    backgroundColor:
                      value >= 8 ? '#22c55e' : value >= 5 ? '#eab308' : '#ef4444',
                  }}
                />
              </div>
              <span
                className={`text-sm font-bold w-12 text-right bg-[#121212] border-2 border-transparent px-1 ${
                  value >= 8
                    ? 'text-green-500 border-green-500'
                    : value >= 5
                    ? 'text-yellow-500 border-yellow-500'
                    : 'text-red-500 border-red-500 animate-pulse'
                }`}
              >
                {value}/10
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="neo-btn-outline px-6 py-3 uppercase tracking-widest text-sm flex items-center">
            <i className="fas fa-share-alt mr-3 text-lg"></i>
            Share_Report
          </button>
          <button
            className="neo-btn px-6 py-3 uppercase tracking-widest text-sm flex items-center"
            onClick={() => window.location.reload()}
          >
            <i className="fas fa-redo mr-3 text-lg"></i>
            Rescan_Target
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChartSummary;
