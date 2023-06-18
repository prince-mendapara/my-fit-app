import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { IActivity } from 'shared/interface';
import { IState } from 'shared/interface/state';

const Activity: React.FC = () => {
	const currentActivity: IActivity = useSelector((state: IState) => state.common.currentActivity);
	return (
		<>
			{!isEmpty(currentActivity) && (
				<section>
					<div className='activity-card'>
						<div className='flex align-items--start justify-content--between width--full'>
							<p className='activity-name'>{currentActivity.name}</p>
							<p className='font-size--xs font--bold'>date: {currentActivity.date}</p>
						</div>
						<div className='item-wrapper flex flex--wrap width--full'>
							<div className='item flex align-items--center'>
								<p className='title mr--10'>Duration :</p>
								<p className='value'>{currentActivity.duration} min</p>
							</div>
							{currentActivity.distance && (
								<div className='item flex align-items--center'>
									<p className='title mr--10'>Distance : </p>
									<p className='value'>{currentActivity.distance} km</p>
								</div>
							)}
							<div className='item flex align-items--center'>
								<p className='title mr--10'>Heart rate : </p>
								<p className='value'>{currentActivity.heart_rate?.average} bpm</p>
							</div>
							<div className='item flex align-items--center'>
								<p className='title mr--10'>Calories : </p>
								<p className='value'>{currentActivity.calories_burned} kcal</p>
							</div>
							{currentActivity.steps && (
								<div className='item flex align-items--center'>
									<p className='title mr--10'>Steps : </p>
									<p className='value'>{currentActivity.steps}</p>
								</div>
							)}
							{currentActivity.pace && (
								<div className='item flex align-items--center'>
									<p className='title mr--10'>Pace : </p>
									<p className='value'>{currentActivity.pace.best}</p>
								</div>
							)}
							{currentActivity.speed && (
								<div className='item flex align-items--center'>
									<p className='title mr--10'>Speed : </p>
									<p className='value'>{currentActivity.speed.average} km/h</p>
								</div>
							)}
							{currentActivity.reps && (
								<div className='item flex align-items--center'>
									<p className='title mr--10'>Reps : </p>
									<p className='value'>{currentActivity.reps.sets} set</p>
								</div>
							)}
							{currentActivity.laps && (
								<div className='item flex align-items--center'>
									<p className='title mr--10'>Laps : </p>
									<p className='value'>{currentActivity.laps}</p>
								</div>
							)}
							{currentActivity.strokes && (
								<div className='item flex align-items--center'>
									<p className='title mr--10'>Strokes : </p>
									<p className='value'>{currentActivity.strokes}</p>
								</div>
							)}
							{currentActivity.strides && (
								<div className='item flex align-items--center'>
									<p className='title mr--10'>Strides : </p>
									<p className='value'>{currentActivity.strides}</p>
								</div>
							)}
						</div>
					</div>
				</section>
			)}
		</>
	);
};

export default Activity;
