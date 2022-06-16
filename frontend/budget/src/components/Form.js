import React, { useState, useEffect } from 'react';

import React from 'react'

export default function Form() {
  return (
    <div>
        <form>
            <h2>Budget</h2>
            
            <div>
                <div>
                    <input type="number"/>
                </div>
            </div>

            <div>
                <div>
                    <input type="number"/>
                </div>

                <div>
                    <input type="number"/>
                </div>

                <div>
                    <input type="number"/>
                </div>
            </div>
            <div>
                <input type="submit" Value="Submit"/>
            </div>
        </form>
    </div>
  )
}
