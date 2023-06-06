let weekly, daily, monthly,
      work0, work1;
daily = document.querySelector('.daily');
weekly = document.querySelector('.weekly');
monthly = document.querySelector('.monthly');
work0 = document.querySelector('.work0')
work0 = document.querySelector('.work1')

daily.addEventListener('click', async () => {
      daily.classList.add('active');
      weekly.classList.remove('active');
      monthly.classList.remove('active');
      const res = await fetch('./data.json');
      const data = await res.json()
      document.querySelector('.work0').innerHTML = data[0].timeframes.daily.current + 'hrs';
      document.querySelector('.work1').innerHTML = data[0].timeframes.daily.previous + 'hrs';
      document.querySelector('.play0').innerHTML = data[1].timeframes.daily.current + 'hrs';
      document.querySelector('.play1').innerHTML = data[1].timeframes.daily.previous + 'hrs';
      document.querySelector('.study0').innerHTML = data[2].timeframes.daily.current + 'hrs';
      document.querySelector('.study1').innerHTML = data[2].timeframes.daily.previous + 'hrs';
      document.querySelector('.exercise0').innerHTML = data[3].timeframes.daily.current + 'hrs';
      document.querySelector('.exercise1').innerHTML = data[3].timeframes.daily.previous + 'hrs';
      document.querySelector('.social0').innerHTML = data[4].timeframes.daily.current + 'hrs';
      document.querySelector('.social1').innerHTML = data[4].timeframes.daily.previous + 'hrs';
      document.querySelector('.selfCare0').innerHTML = data[5].timeframes.daily.current + 'hrs';
      document.querySelector('.selfCare1').innerHTML = data[5].timeframes.daily.previous + 'hrs';
})

weekly.addEventListener('click', async () => {
      weekly.classList.add('active');
      daily.classList.remove('active');
      monthly.classList.remove('active');
      const res = await fetch('./data.json');
      const data = await res.json()
      document.querySelector('.work0').innerHTML = data[0].timeframes.weekly.current + 'hrs';
      document.querySelector('.work1').innerHTML = data[0].timeframes.weekly.previous + 'hrs';
      document.querySelector('.play0').innerHTML = data[1].timeframes.weekly.current + 'hrs';
      document.querySelector('.play1').innerHTML = data[1].timeframes.weekly.previous + 'hrs';
      document.querySelector('.study0').innerHTML = data[2].timeframes.weekly.current + 'hrs';
      document.querySelector('.study1').innerHTML = data[2].timeframes.weekly.previous + 'hrs';
      document.querySelector('.exercise0').innerHTML = data[3].timeframes.weekly.current + 'hrs';
      document.querySelector('.exercise1').innerHTML = data[3].timeframes.weekly.previous + 'hrs';
      document.querySelector('.social0').innerHTML = data[4].timeframes.weekly.current + 'hrs';
      document.querySelector('.social1').innerHTML = data[4].timeframes.weekly.previous + 'hrs';
      document.querySelector('.selfCare0').innerHTML = data[5].timeframes.weekly.current + 'hrs';
      document.querySelector('.selfCare1').innerHTML = data[5].timeframes.weekly.previous + 'hrs';
})

monthly.addEventListener('click', async () => {
      monthly.classList.add('active');
      weekly.classList.remove('active');
      daily.classList.remove('active');
      const res = await fetch('./data.json');
      const data = await res.json()
      document.querySelector('.work0').innerHTML = data[0].timeframes.monthly.current + 'hrs';
      document.querySelector('.work1').innerHTML = data[0].timeframes.monthly.previous + 'hrs';
      document.querySelector('.play0').innerHTML = data[1].timeframes.monthly.current + 'hrs';
      document.querySelector('.play1').innerHTML = data[1].timeframes.monthly.previous + 'hrs';
      document.querySelector('.study0').innerHTML = data[2].timeframes.monthly.current + 'hrs';
      document.querySelector('.study1').innerHTML = data[2].timeframes.monthly.previous + 'hrs';
      document.querySelector('.exercise0').innerHTML = data[3].timeframes.monthly.current + 'hrs';
      document.querySelector('.exercise1').innerHTML = data[3].timeframes.monthly.previous + 'hrs';
      document.querySelector('.social0').innerHTML = data[4].timeframes.monthly.current + 'hrs';
      document.querySelector('.social1').innerHTML = data[4].timeframes.monthly.previous + 'hrs';
      document.querySelector('.selfCare0').innerHTML = data[5].timeframes.monthly.current + 'hrs';
      document.querySelector('.selfCare1').innerHTML = data[5].timeframes.monthly.previous + 'hrs';
})