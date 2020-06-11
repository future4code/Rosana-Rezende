import React from 'react'
import { Card, CardContent, Typography, CardActions, Button } from "@material-ui/core"
// import { ButtonWrapper } from "./styles"

function FileUploader() {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">
                    Selecione um arquivo para realizar o upload
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="primary">
                    oi
                </Button>
            </CardActions>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}

export default FileUploader