const filters = ["Top Villa", "Self Checkin", "Beachfront", "Mountain View"];

return (
  <div className="flex flex-wrap justify-center my-4">
    {filters.map((filter) => (
      <Pill key={filter} label={filter} />
    ))}
  </div>
);
