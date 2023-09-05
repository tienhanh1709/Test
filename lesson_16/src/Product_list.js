import React from "react";

function ProductList(pops) {
  let style_sale = pops.sale;
  let style_star = pops.star;
  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          {/* Sale badge*/}
          <div
            className="badge bg-dark text-white position-absolute"
            style={style_sale}
          >
            Sale
          </div>
          {/* Product image*/}
          <img
            className="card-img-top"
            src={pops.image}
            alt="..."
          />
          {/* Product details*/}
          <div className="card-body p-4">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">{pops.name}</h5>
              {/* Product reviews*/}
              <div className="d-flex justify-content-center small text-warning mb-2" style={style_star}>
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
              {/* Product price*/}
              <span className="text-muted text-decoration-line-through">
                {pops.priceOff} 
              </span>
              {pops.price}
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#!">
                {pops.btn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
