import Link from 'next/link';
export default props =>
  <div className="jumbotron" data-pages="parallax">
    <div className="container-fluid sm-p-l-20 sm-p-r-20">
      <div className="inner">
        {/* START BREADCRUMB */}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/admin">
              <a>Admin</a>
            </Link>
          </li>
          <li className="breadcrumb-item active">
            {props.page}
          </li>
        </ol>
        {/* END BREADCRUMB */}
      </div>
    </div>
  </div>;
