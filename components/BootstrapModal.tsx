'use client';

import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';

export default function BootstrapModal() {
  useEffect(() => {
    const modalEl = document.getElementById('exampleModal');
    if (!modalEl) return;

    // Initialize the modal
    new bootstrap.Modal(modalEl);
  }, []);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header modal-header-updated mb-0 pb-0">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body mt-0 text-start">
            <div className="card card-updated">
              <div className="card-body">
                <h5 className="card-title fs-2">About me</h5>
                <strong className="my-story">My story</strong>
                <p className="card-text">
                    Full-stack developer building modern web applications with Next.js at the core.
                    Evolving through real projects, focused on clarity and performance.
                </p>
                <a href="#" className="btn btn-primary">Get in touch</a>
                <div className="other-details mt-3">
                  <div className="row">
                    <div className="col col-sm-12">
                      <h6>AGE: <span>21</span></h6>
                      <h6>PHONE: <span>+977 9810436658</span></h6>
                    </div>
                    <div className="col col-sm-12">
                      <h6>RESIDENCE: <span>NEPAL🇳🇵</span></h6>
                      <h6>EMAIL: <span>rochakneupane5@gmail.com</span></h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
