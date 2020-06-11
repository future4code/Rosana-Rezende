import React, { useState } from 'react'
import axios from "axios"

import { Card, CardContent, Typography, Button } from "@material-ui/core"
import { ContentWrapper } from "./styles"

function FileUploader() {
    const [link, setLink] = useState(undefined)

    const handleFile = async (e) => {
        setLink(undefined) // pra toda vez q alguém clica limpar a msg
        const data = new FormData()
        data.append("file", e.target.files[0])
        const result = await axios.put("http://localhost:3001/files/upload", data)        
        setLink(result.data.link)
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h6">
                    Selecione um arquivo para realizar o upload
                </Typography>
            </CardContent>
            <ContentWrapper>
                <input
                    accept="image/*"
                    style={ { display: "none"} }
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleFile}
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
            </ContentWrapper>
            {link &&
                <ContentWrapper>
                    <Typography>
                        O arquivo encontra-se no link: {link}
                    </Typography>
                </ContentWrapper>
            }
        </Card>
    )
}

export default FileUploader