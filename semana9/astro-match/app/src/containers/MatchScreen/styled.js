import styled from 'styled-components'
import Icon from '@mdi/react'
import DeleteIcon from '@material-ui/icons/Delete';

export const MatchIcon = styled(Icon)`
	display: block;
	fill: #4AA397;
`

export const Delete = styled(DeleteIcon)`
	display: block;
	color: red;
`

export const List = styled.ul`
  padding: 0 10px;
`

export const ListItem = styled.div`
  position: relative;
  height: 70px;
  padding: 10px;
  display: flex;
  list-style: none;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;
  justify-content: space-between;
  
  :hover {
    background: #eee;
  }
  
  :last-child {
    border: unset;
  }
  
  /* :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.1);
    		content: "";
			}
   } */

   >div{
     display: flex;
     align-items: center;
   }
`

export const Avatar = styled.div`
  height: 100%;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background: url(${props => props.src});
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
`

export const ListText = styled.p`
  user-select: none;
`
