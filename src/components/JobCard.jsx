function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div>
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">{job.company}</p>
        </div>
        <span className={`job-type ${job.type.toLowerCase().replace("-", "")}`}>
          {job.type}
        </span>
      </div>

      <div className="job-meta">
        <span>📍 {job.location}</span>
        <span>🎯 {job.level}</span>
        <span>💼 {job.category}</span>
      </div>

      <p className="job-description">{job.description}</p>

      <div className="job-footer">
        <span className="job-salary">
          ${job.salary.min.toLocaleString()} — ${job.salary.max.toLocaleString()}
        </span>
        <span className="job-date">Posted {job.postedDate}</span>
      </div>
    </div>
  );
}

export default JobCard;