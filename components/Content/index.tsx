import { Container, Text, Spacer, Card, Grid } from "@nextui-org/react"
import { Box } from "../Box"
import Image from 'next/image'
import Map from "../Map"
export const Content = () => (
  <Box css={{px: "$12", mt: "$8", "@xsMax": {px: "$10"}}}>
    <Grid.Container gap={4} justify="center" >
      <Grid lg={7}>
        <Card isHoverable isPressable variant="bordered"
          css={{ 
            borderColor: "rgb(255, 255, 255, 0.3)",
            $$cardColor: "bg-neutral-900",
            alignItems: "center"
         }}
        >
            <Card.Body>
              <Map/>
            </Card.Body>
        </Card>
      </Grid>
      <Grid lg={4} justify = "center" alignItems="center" alignContent="center">
              <Text b color="white"  size={45}  >Decentralized Serverless Computing</Text>
        
      </Grid>
    </Grid.Container>

    <Spacer y={10} />
  </Box>
);