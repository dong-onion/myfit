import { theme } from '@/styles/theme';
import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

// ChartOptions 인터페이스 정의
interface ChartOptions {
  chart: {
    toolbar: {
      show: boolean;
    };
    fontFamily: string;
    foreColor: string;
  };
  xaxis: {
    categories: string[];
    axisTicks: {
      show: boolean;
    };
    labels: {
      show: boolean;
    };
  };
  yaxis: {
    min: number;
    max: number;
    stepSize: number;
    labels: {
      style: {
        colors: string[];
        fontSize?: string;
        fontFamily?: string;
        fontWeight?: number;
      };
    };
  };
  plotOptions: {
    bar: {
      distributed: boolean;
      horizontal: boolean;
      borderRadius: number;
      columnWidth: string;
      colors: {
        backgroundBarColors: string[];
        backgroundBarOpacity: number;
      };
      highlightOnHover: boolean;
    };
  };
  tooltip: {
    enabled: boolean;
  };
  dataLabels: {
    enabled: boolean;
  };
  legend: {
    show: boolean;
  };
  colors: string[];
}

// styled-components를 사용하여 스타일 정의
export const ChartContainer = styled.div`
  width: 452px;
  height: 325px;
  border-radius: 12px;
  background-color: #ffffffcc;
  box-shadow: 0px 20px 40px 0px #0000001a;
`;

interface Props {
  series: { data: number[] }[];
}

const BarChart = ({ series }: Props) => {
  const max = Math.max(...series[0].data);
  const maximumValueIndex = series[0].data.indexOf(max);

  const min = Math.min(...series[0].data);
  const minimumValueIndex = series[0].data.indexOf(min);

  const defaultColor = `${theme.color.primary[0]}`;
  const maxColor = '#6F56FF';
  const minColor = '#FF6294';

  const defaultOptions: ChartOptions = {
    colors: Array.from({ length: series[0].data.length }, () => defaultColor),
    chart: {
      toolbar: {
        show: false,
      },
      fontFamily: 'Pretendard, sans-serif',
      foreColor: '#000000',
    },
    xaxis: {
      categories: [
        '창업',
        '시장 타당성',
        '고객 정의',
        '객관적 정보',
        '기술 경쟁력',
        '경영 관리',
      ],
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      min: 1,
      max: 5,
      stepSize: 1,
      labels: {
        style: {
          colors: [`${theme.color.gray[2]}`],
          fontSize: '14px',
          fontFamily: 'Montserrat-Regular',
          fontWeight: 400,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: false,
        borderRadius: 2.3,
        columnWidth: '22px',
        colors: {
          backgroundBarColors: Array(series[0].data.length).fill(
            `${theme.color.white[0]}`,
          ),
          backgroundBarOpacity: 0.1,
        },
        highlightOnHover: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: false,
    },
  };

  const newColors = [...defaultOptions.colors];
  newColors[maximumValueIndex] = maxColor;
  newColors[minimumValueIndex] = minColor;

  const newBackgroundColors = [
    ...defaultOptions.plotOptions.bar.colors.backgroundBarColors,
  ];
  newBackgroundColors[minimumValueIndex] = minColor;

  const newOptions: ChartOptions = {
    ...defaultOptions,
    plotOptions: {
      ...defaultOptions.plotOptions,
      bar: {
        ...defaultOptions.plotOptions.bar,
        colors: {
          ...defaultOptions.plotOptions.bar.colors,
          backgroundBarColors: newBackgroundColors,
        },
      },
    },
    colors: newColors,
  };

  //second result에서  부족한 타입 정하기, ex)창업 경험 부족, 시장 타당성 부족 => 부족한 타입 프롭으로 받기,
  // 부족한 타입에 따라서 headerImage, footerImage, contentInfo, serviceTool 이 바뀜

  return (
    <ChartContainer>
      <Chart
        options={newOptions}
        series={series}
        type="bar"
        width="452"
        height={232}
        colors={[
          defaultColor,
          minColor,
          maxColor,
          defaultColor,
          defaultColor,
          defaultColor,
        ]}
      />
    </ChartContainer>
  );
};

export default BarChart;
