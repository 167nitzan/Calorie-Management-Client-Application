import { useEffect, useMemo } from 'react';

const MonthYearPicker = ({ onChange, date }) => {
  const selectedMonthYear = useMemo(() => {
    if (date) {
      return `${date.year}-${date.month.toString().padStart(2, '0')}`;
    }
    return '';
  }, [date]);

  useEffect(() => {
    if (onChange && selectedMonthYear) {
      const [year, month] = selectedMonthYear.split('-');
      onChange({
        year: Number(year),
        month: Number(month),
      });
    }
  }, [onChange, selectedMonthYear]);

  const handleMonthYearChange = e => {
    if (e.target.value) {
      const [year, month] = e.target.value.split('-');
      onChange({
        year: Number(year),
        month: Number(month),
      });
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <label
        htmlFor="monthYearPicker"
        style={{ marginRight: '10px' }}
      >
        Select Month and Year:
      </label>
      <input
        id="monthYearPicker"
        type="month"
        value={selectedMonthYear}
        onChange={handleMonthYearChange}
      />
    </div>
  );
};

export default MonthYearPicker;
