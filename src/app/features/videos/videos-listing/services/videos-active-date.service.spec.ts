import { VideosActiveDateService } from './videos-active-date.service';

describe('VideosActiveDateService', () => {
  let service: VideosActiveDateService;

  beforeEach(() => {
    service = new VideosActiveDateService();
  });

  it('should set active date', () => {
    const newDate = new Date('2023-06-01');
    service.setActiveDate(newDate);
    expect(service.activeDate$.value).toBe('2023-06-01');
  });

  it('should change active date by one day in the future', () => {
    const currentDate = new Date('2023-06-01');
    service.setActiveDate(currentDate);
    service.changeByDay(1);
    expect(service.activeDate$.value).toBe('2023-06-02');
  });

  it('should change active date by one day in the past', () => {
    const currentDate = new Date('2023-06-02');
    service.setActiveDate(currentDate);
    service.changeByDay(-1);
    expect(service.activeDate$.value).toBe('2023-06-01');
  });

  it('should format date', () => {
    const dateToFormat = new Date('2023-06-01');
    const formattedDate = service['_formatDate'](dateToFormat);
    expect(formattedDate).toBe('2023-06-01');
  });
});
