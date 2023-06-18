import { useSelector } from 'react-redux';
import { DurationIcon, StepIcon } from 'shared/components/icons/icons';
import { IActivity } from 'shared/interface';
import { IState } from 'shared/interface/state';

const Dashboard: React.FC = () => {
	const activities = useSelector((state: IState) => state.common.activities);
	const todayActivity = activities[0] || ({} as IActivity);
	return (
		<section>
			<div className='statistic flex align-items--center flex--wrap mb--20'>
				<div className='statistic-card step-card'>
					<p className='title text--center'>Steps</p>
					<p className='value'>{todayActivity.steps}</p>
				</div>
				<div className='statistic-card duration-card'>
					<p className='title text--center'>Duration</p>
					<p className='value'>{todayActivity.duration} min</p>
				</div>
				<div className='statistic-card heartrate-card'>
					<p className='title text--center'>Heart Rate</p>
					<p className='value'>{todayActivity.heart_rate?.average} bpm</p>
				</div>
				<div className='statistic-card kcal-card'>
					<p className='title text--center'>Calories</p>
					<p className='value'>{todayActivity.calories_burned} kcal</p>
				</div>
			</div>
			<div className='activities-wrapper'>
				<p className='title'>All Activities</p>
				<div className='items flex flex--wrap'>
					{activities.map((item) => {
						return (
							<div className='card' key={item.id}>
								<p className='activity-name text--center'>{item.name}</p>
								<div className='mb--6 flex align-items--center'>
									<DurationIcon className='icon' />
									<p className='duration'>{item.duration}min</p>
								</div>
								{item.distance && (
									<div className='flex align-items--center'>
										<StepIcon className='icon' />
										<p className='distance'>{item.distance}km</p>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
