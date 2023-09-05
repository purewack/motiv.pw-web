const {getEpochDate, getEpochYear, getEpochMonth} = require('./EpochTime.js');

test('Period within 2023',()=>{
    expect(getEpochYear(0)).toBe(2023);
    expect(getEpochYear(-1)).toBe(2023);
    expect(getEpochYear(-2)).toBe(2023);
    expect(getEpochYear(-3)).toBe(2023);
    expect(getEpochYear(-4)).toBe(2023);
    expect(getEpochYear(-5)).toBe(2023);
    expect(getEpochYear(-6)).toBe(2023);
    expect(getEpochYear(-7)).toBe(2023);
})

test('Period within 2022',()=>{
    expect(getEpochYear(-7)).toBe(2023);
    expect(getEpochYear(-8)).toBe(2022);
    expect(getEpochYear(-9)).toBe(2022);
})

test('Period within 2021',()=>{
    expect(getEpochYear(-19)).toBe(2022);
    expect(getEpochYear(-21)).toBe(2021);
    expect(getEpochYear(-22)).toBe(2021);
})

test('Months within first epoch', ()=>{
    expect(getEpochMonth(0)).toBe('August');
    expect(getEpochMonth(-1)).toBe('July');
    expect(getEpochMonth(-7)).toBe('January');
})
test('Months within 2022 epoch', ()=>{
    expect(getEpochMonth(-8)).toBe('December');
    expect(getEpochMonth(-9)).toBe('November');
    expect(getEpochMonth(-16)).toBe('April');
})
test('Months within 2021 epoch', ()=>{
    expect(getEpochMonth(-19)).toBe('January');
    expect(getEpochMonth(-20)).toBe('December');
    expect(getEpochMonth(-21)).toBe('November');
})

test('Months in future', ()=>{
    expect(getEpochMonth(1)).toBe('September');
    expect(getEpochMonth(6)).toBe('February');
})