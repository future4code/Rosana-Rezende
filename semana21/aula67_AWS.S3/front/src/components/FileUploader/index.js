import React from 'react'
import { Card, CardContent, Typography, Button } from "@material-ui/core"
import { ButtonWrapper } from "./styles"

function FileUploader() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">
                    Selecione um arquivo para realizar o upload
                </Typography>
            </CardContent>
            <ButtonWrapper>
                <Button color="primary" variant="contained">
                    SELECIONAR ARQUIVO
                </Button>
            </ButtonWrapper>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}

export default FileUploader