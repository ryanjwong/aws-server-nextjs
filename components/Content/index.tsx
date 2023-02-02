import { Text, Spacer, Card, Grid } from "@nextui-org/react"
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
              <Text b color="white"  size={45}  css={{
          textGradient: "45deg, $blue600 -20%, $white 100%",
        }}>Cloud Computing: Reinvented</Text>
      </Grid>
    </Grid.Container>
    <Spacer y={1} />
    <Spacer y={1} />
    <Text color="white" size="$lg">
      Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
      Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
      consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
      pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
      ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
      dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
      tellus orci ac.
    </Text>
    <Spacer y={1} />
    <Text color="white" size="$lg">
      Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. In pellentesque massa placerat
      duis ultricies. Sit amet massa vitae tortor condimentum. Morbi tincidunt augue interdum velit
      euismod. Aliquet enim tortor at auctor urna nunc id. A scelerisque purus semper eget. Vitae
      justo eget magna fermentum iaculis. Arcu non odio euismod lacinia at quis. Et leo duis ut diam
      quam nulla porttitor massa. Eget nunc scelerisque viverra mauris. Suscipit tellus mauris a
      diam maecenas sed enim. Cras sed felis eget velit aliquet. Est placerat in egestas erat
      imperdiet sed euismod nisi porta. In ante metus dictum at tempor commodo. In cursus turpis
      massa tincidunt dui ut ornare lectus. Tempus iaculis urna id volutpat. Iaculis eu non diam
      phasellus vestibulum lorem sed risus.
    </Text>
    <Spacer y={1} />
    <Text color="white" size="$lg">
      Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Imperdiet massa tincidunt
      nunc pulvinar sapien et ligula ullamcorper malesuada. Faucibus pulvinar elementum integer enim
      neque volutpat. Gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in
      vitae. Ultricies tristique nulla aliquet enim tortor. Nec tincidunt praesent semper feugiat
      nibh sed. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Praesent semper
      feugiat nibh sed pulvinar proin gravida. Dis parturient montes nascetur ridiculus mus mauris.
      Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Ut lectus arcu bibendum at.
      Integer enim neque volutpat ac. Diam sit amet nisl suscipit. Eros donec ac odio tempor orci
      dapibus ultrices in iaculis. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quis
      lectus nulla at volutpat diam ut. Turpis egestas integer eget aliquet. Adipiscing tristique
      risus nec feugiat in fermentum posuere. Morbi tempus iaculis urna id. Amet commodo nulla
      facilisi nullam vehicula ipsum a arcu.
    </Text>
    <Text color="white" size="$lg">
      Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh
      sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada
      proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra
      tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque
      gravida in.
    </Text>
    <Spacer y={1} />
    <Text color="white" size="$lg">
      Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
      Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
      consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
      pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
      ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
      dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
      tellus orci ac.
      Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
      Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
      consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
      pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
      ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
      dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
      tellus orci ac.Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
      Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
      consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
      pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
      ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
      dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
      tellus orci ac.Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
      Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
      consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
      pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
      ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
      dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
      tellus orci ac.Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat.
      Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor
      consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel
      pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi
      ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam
      dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non
      tellus orci ac.
    </Text>
    <Spacer y={1} />
  </Box>
);