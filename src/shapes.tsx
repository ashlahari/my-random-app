import { useState } from "react";
import {motion} from "framer-motion";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

export const Shapes = (props: any) => {
    const [shapes, setShapes] = useState<any>([]);
    const colors = ['red', 'blue', 'yellow', 'purple'];

    const createShape = (e: any) => {
        const rndInt = Math.floor(Math.random() * 4) + 1;
        const firstDimension = Math.floor(Math.random() * 50) + 1;
        const secondDimension = Math.floor(Math.random() * 50) + 1;
        const rndIntColor = Math.floor(Math.random() * 4) + 1;
        const randXTranslate = Math.floor(Math.random() * 100 + 1);
        const randYTranslate = Math.floor(Math.random() * 100 + 1);

        var newShape;
        if(rndInt === 1) {
            newShape = (
                <motion.div
                    style={{
                        top: e.clientY - firstDimension/2,
                        left: e.clientX - firstDimension/2,
                        position: 'absolute',
                        height: firstDimension,
                        width: firstDimension,
                        backgroundColor: colors[rndIntColor - 1],
                        borderRadius: '50%',
                        display: 'inline-block'
                    }}
                    animate={{
                        x: [0, e.clientX - firstDimension/2 + randXTranslate, window.innerWidth],
                        y: [0, e.clientY - firstDimension/2 + randYTranslate, window.innerHeight],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        opacity: {
                          duration: 0.5,
                          repeat: Infinity
                        }
                    }}
                />
            );
        }
        else if(rndInt === 2) {
            newShape = (
                <motion.div
                    key={e.screenX + e.screenY}
                    style={{
                        top: e.clientY - firstDimension/2,
                        left: e.clientX - firstDimension/2,
                        height: firstDimension,
                        width: firstDimension,
                        backgroundColor: colors[rndIntColor - 1],
                        position: 'absolute',
                    }}
                    animate={{
                        x: [0, e.clientX - firstDimension/2 + randXTranslate],
                        y: [e.clientY - firstDimension/2 - randYTranslate, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        opacity: {
                          duration: 0.5,
                          repeat: Infinity
                        }
                    }}
                />
            );
        }
        else if(rndInt === 3) {
            newShape = (
                <motion.div
                    key={e.screenX + e.screenY}
                    style={{
                        top: e.clientY - firstDimension/2,
                        left: e.clientX - secondDimension/2,
                        height: firstDimension,
                        width: secondDimension,
                        backgroundColor: colors[rndIntColor - 1],
                        position: 'absolute'
                    }}
                    animate={{
                        x: [e.clientX - secondDimension/2 - randXTranslate, 0],
                        y: [e.clientY - firstDimension/2 + randYTranslate, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        opacity: {
                          duration: 0.5,
                          repeat: Infinity
                        }
                    }}
                />
            );
        }
        else if(rndInt === 4) {
            newShape = (
                <motion.div
                    key={e.screenX + e.screenY}
                    style={{
                        top: e.clientY - firstDimension/2,
                        left: e.clientX - secondDimension/2,
                        height: firstDimension,
                        width: secondDimension,
                        backgroundColor: colors[rndIntColor - 1],
                        position: 'absolute',
                        borderRadius: '50%'
                    }}
                    animate={{
                        x: [0, e.clientX - secondDimension/2 - randXTranslate],
                        y: [e.clientY - firstDimension/2 - randYTranslate, 0],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        opacity: {
                          duration: 0.5,
                          repeat: Infinity
                        }
                    }}
                />
            );
        }
        
        setShapes([...shapes, newShape]);
    }

    return(
            <div 
                className="mainDiv"
                onClick={(e) => createShape(e)}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p className="mainDivText">Click anywhere on the screen and create your own random confetti!</p>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={(e) => {
                                e.stopPropagation();
                                setShapes([]);
                            }}
                            style={{
                                margin: 'auto',
                                fontFamily: 'Rancho',
                                fontSize: '25px'
                            }}
                        >
                            RESET
                        </Button>
                    </Grid>
                </Grid>
                {shapes}
            </div>
    );
};

export default Shapes;