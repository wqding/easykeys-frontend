import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {useDropzone} from 'react-dropzone'

import SignIn from './SignIn';

function Home({token, setToken}) {
    // if(!token) {
    //     return <SignIn setToken={setToken} />
    // }
    const [droppedFiles, setDroppedFiles] = useState([])
    
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
        setDroppedFiles(acceptedFiles)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    const sendFiles = () => {
        const uploaders = droppedFiles.map(file => {
            const formData = new FormData();
            formData.append("title", "my file")
            formData.append("file", file)
            fetch('http://127.0.0.1:8000/csv_api/upload_csv', {
                method: 'POST',
                body: formData
            })
            .then(response => {
              console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
          });
    }
  
    return <div class="flex items-center justify-center p-12">
        <div class="mx-auto w-full max-w-[550px] bg-white">
            <div class="mb-6 pt-4">
                <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload Files
                </label>

                <div class="mb-8" {...getRootProps()}>
                    <input type="file" name="file" id="file" class="sr-only" {...getInputProps()} />
                    <label
                        for="file"
                        class={`relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed ${
                            isDragActive ?
                            "border-sky-600":
                            "border-[#e0e0e0]"
                        } p-12 text-center`}
                    >
                        <div>
                        <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                            Drop files here
                        </span>
                        <span class="mb-2 block text-base font-medium text-[#6B7280]">
                            Or
                        </span>
                        <span
                            class="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]"
                        >
                            Browse
                        </span>
                        </div>
                    </label>
                </div>


                {/* Styling for uploaded files, figure out later */}
                {/* <div class="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div class="flex items-center justify-between">
                        <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                            banner-design.png
                        </span>
                        <button class="text-[#07074D]">
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill="currentColor"
                            />
                            <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill="currentColor"
                            />
                        </svg>
                        </button>
                    </div>
                </div> */}

                {/* <div class="rounded-md bg-[#F5F7FB] py-4 px-8">
                    <div class="flex items-center justify-between">
                        <span class="truncate pr-3 text-base font-medium text-[#07074D]">
                        banner-design.png
                        </span>
                        <button class="text-[#07074D]">
                        <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                            fill="currentColor"
                            />
                            <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                            fill="currentColor"
                            />
                        </svg>
                        </button>
                    </div>
                    <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                        <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-[#6A64F1]"></div>
                    </div>
                </div> */}
            </div>

            <div>
                <button 
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    onClick={() => {sendFiles()}}>
                    Upload
                </button>
            </div>
        </div>
    </div>;
}

// Home.propTypes = {
//     setToken: PropTypes.func.isRequired
// };

export default Home;