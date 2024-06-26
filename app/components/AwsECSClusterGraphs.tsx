import React, { useContext, useEffect } from 'react';
import AwsChart from '../charts/AwsChart';
import { stringToColor } from '../utils';
import { AwsContext } from '../context/AwsContext';

const AwsECSClusterGraphs: React.FC = React.memo(props => {
  const { awsEcsData, setAwsEcsData, setLoadingState } = useContext(AwsContext);

  useEffect(() => {
    return () => {
      setAwsEcsData({});
      setLoadingState(true);
    };
  }, []);

  const activeServices = Object.keys(awsEcsData)
    .slice(1)
    .filter(el => awsEcsData[el].CPUUtilization?.value.length > 0);
  const serviceGraphs = activeServices.map(service => {
    return (
      <div className="ecsCharts-container">
        <div id="service-name">
          <p>Service Name:</p>
          <strong>{service}</strong>
        </div>
        <div className="ecsCharts">
          <AwsChart
            className="chart"
            renderService="CPU Utilization"
            metric="Percent"
            timeList={awsEcsData[service]?.CPUUtilization.time}
            valueList={awsEcsData[service]?.CPUUtilization.value}
            colourGenerator={stringToColor}
          />
          <AwsChart
            className="chart"
            renderService="Memory Utilization"
            metric="Percent"
            timeList={awsEcsData[service]?.MemoryUtilization.time}
            valueList={awsEcsData[service]?.MemoryUtilization.value}
            colourGenerator={stringToColor}
          />
        </div>
      </div>
    );
  });

  return <div>{serviceGraphs}</div>;
});

export default AwsECSClusterGraphs;
