'use client';

import { useEffect } from "react";
import * as bootstrap from 'bootstrap';


export default function BootstrapTooltips() {
  useEffect(() => {
    const tooltipTriggerList = Array.from(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );

    tooltipTriggerList.forEach((tooltipEl) => {
      new bootstrap.Tooltip(tooltipEl);
    });
  }, []);

  return null; // no UI needed
}
