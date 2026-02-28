import React from 'react';
import './Contact.css';
import { Button } from '@mantine/core';
import profile from '../assets/javier.png';
class Contact extends React.Component {
  render(){
    return <div className='aboutouterdiv'>
            <div className='aboutdiv'>
              <img className='aboutpic' src={profile}></img>
              <p>Phasellus viverra odio a nibh lacinia, ut pharetra augue porta. In at risus sapien. Duis in arcu augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce lobortis lectus leo, in ultricies lectus condimentum id. Phasellus in lectus ac elit eleifend pharetra. Aenean a ante sit amet dui rutrum pretium. Duis ut leo odio. Mauris quis nunc tincidunt, vulputate sapien a, vestibulum ipsum. Proin imperdiet vehicula nisi eu tempus. Fusce tincidunt placerat dignissim. Nullam tincidunt libero non urna laoreet, ac mattis tortor gravida. Curabitur tincidunt ex ac ex aliquam, vitae cursus mauris tempus. Sed dignissim magna vel neque ornare, vitae fringilla ligula condimentum. Praesent cursus nulla lacus, vel consectetur felis venenatis id.
                Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus blandit augue lobortis diam tincidunt finibus. Proin tincidunt arcu massa, ac faucibus ante bibendum id. Integer elementum ante quam, sit amet iaculis purus sodales nec. Duis vel molestie dui. Suspendisse sollicitudin ante urna, vel volutpat sem pellentesque in. Maecenas non purus felis. Nullam et ligula consequat, suscipit sapien et, placerat turpis. Pellentesque fermentum ut nisl nec egestas. Praesent ac nibh diam. Sed vitae nunc sit amet ante molestie dignissim. Pellentesque vel ex quis lacus tempus feugiat.
                Lorem Ipsum
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nulla lorem, consectetur vel ante quis, feugiat ullamcorper erat. Nulla varius blandit quam, sed gravida enim ultrices eget. Nam faucibus quis leo id facilisis. Donec non nisl nec metus convallis malesuada. Praesent eu varius nisl. Nulla lacinia metus nec congue tincidunt. Quisque felis ipsum, ornare ut metus ac, blandit volutpat nibh. Cras ut risus augue. Quisque iaculis hendrerit nisl, ac tempus nunc ornare sit amet. Pellentesque placerat purus vitae malesuada vehicula.
                Sed lorem libero, fermentum vitae sapien a, luctus feugiat libero. </p>
            </div>  
      </div> 
      ;
  }
}

export default Contact;